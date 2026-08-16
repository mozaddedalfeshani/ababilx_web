import type { ReactNode } from "react";

type Block =
  | { type: "p"; lines: string[] }
  | { type: "h"; level: number; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; body: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "hr" }
  | { type: "blockquote"; lines: string[] };

const INLINE_RE =
  /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\((?:\([^)]*\)|[^)])+\))/g;

const HEADING_CLASSES: Record<number, string> = {
  1: "text-2xl font-bold text-[#f8fafc] mt-2 mb-3",
  2: "text-xl font-bold text-[#f1f5f9] mt-8 mb-3 scroll-mt-24",
  3: "text-lg font-semibold text-[#e2e8f0] mt-6 mb-2 scroll-mt-24",
  4: "text-base font-semibold text-[#e2e8f0] mt-4 mb-2",
  5: "text-sm font-semibold text-[#cbd5e1] mt-3 mb-1",
  6: "text-sm font-medium text-[#94a3b8] mt-3 mb-1",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}


function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(INLINE_RE);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={key}
          className="rounded bg-[#1e293b] px-1.5 py-0.5 font-mono text-[0.85em] text-[#e2e8f0]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(((?:\([^)]*\)|[^)])+)\)$/);
    if (link) {
      return <span key={key}>{link[1]}</span>;
    }
    return <span key={key}>{part}</span>;
  });
}

function isTableRow(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|") && trimmed.length > 2;
}

function isTableSeparator(line: string): boolean {
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(line.trim());
}

function parseTableCells(line: string): string[] {
  const inner = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  const cells: string[] = [];
  let current = "";
  let escaped = false;
  let inCode = false;

  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];

    if (escaped) {
      current += ch;
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      escaped = true;
      current += ch;
      continue;
    }

    if (ch === "`") {
      inCode = !inCode;
      current += ch;
      continue;
    }

    if (ch === "|" && !inCode) {
      cells.push(current.trim());
      current = "";
      continue;
    }

    current += ch;
  }

  cells.push(current.trim());
  return cells;
}

function stripHtmlComments(text: string): string {
  return text.replace(/<!--[\s\S]*?-->/g, "");
}

function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function normalizeComplexMarkdown(text: string): string {
  const lines = stripMarkdownLinks(stripHtmlComments(text)).replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // Drop Table of Contents blocks to keep content concise and clean.
    if (/^##\s+Table of Contents$/i.test(trimmed)) {
      i++;
      while (i < lines.length && !/^\s*##\s+/.test(lines[i])) {
        i++;
      }
      continue;
    }

    // Convert markdown tables into plain list lines (easier to render/read).
    if (/^\s*\|.*\|\s*$/.test(lines[i])) {
      const tableLines: string[] = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }

      if (tableLines.length >= 2 && isTableSeparator(tableLines[1])) {
        const headers = parseTableCells(tableLines[0]);
        for (let rowIdx = 2; rowIdx < tableLines.length; rowIdx++) {
          const row = parseTableCells(tableLines[rowIdx]);
          if (row.length === 0) continue;
          if (headers.length === 2 && row.length >= 2) {
            out.push(`- **${row[0]}:** ${row[1]}`);
            continue;
          }
          const parts = row.map((cell, ci) => {
            const key = headers[ci] ?? `Column ${ci + 1}`;
            return `${key}: ${cell}`;
          });
          out.push(`- ${parts.join(" | ")}`);
        }
      } else {
        out.push(...tableLines);
      }
      continue;
    }

    out.push(lines[i]);
    i++;
  }

  return out.join("\n");
}

function parseBlocks(text: string): Block[] {
  const lines = normalizeComplexMarkdown(text).split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", body: buf.join("\n") });
      continue;
    }

    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    const heading = line.match(/^\s*(#{1,6})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: "h",
        level: heading[1].length,
        text: heading[2].trim(),
        id: slugify(heading[2]),
      });
      i++;
      continue;
    }

    if (trimmed.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        buf.push(lines[i].replace(/^\s*>\s?/, ""));
        i++;
      }
      blocks.push({ type: "blockquote", lines: buf });
      continue;
    }

    if (isTableRow(line)) {
      const headers = parseTableCells(line);
      i++;
      if (i < lines.length && isTableSeparator(lines[i])) i++;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        rows.push(parseTableCells(lines[i]));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    const ul = line.match(/^\s*[-*]\s+(.*)$/);
    if (ul) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = lines[i].match(/^\s*[-*]\s+(.*)$/);
        if (!m) break;
        items.push(m[1]);
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const ol = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (ol) {
      const items: string[] = [];
      while (i < lines.length) {
        const m = lines[i].match(/^\s*\d+[.)]\s+(.*)$/);
        if (!m) break;
        items.push(m[1]);
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (trimmed === "") {
      i++;
      continue;
    }

    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("```") &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^\*\*\*+$/.test(lines[i].trim()) &&
      !lines[i].match(/^\s*#{1,6}\s+/) &&
      !lines[i].trim().startsWith(">") &&
      !isTableRow(lines[i]) &&
      !lines[i].match(/^\s*[-*]\s+/) &&
      !lines[i].match(/^\s*\d+[.)]\s+/)
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", lines: buf });
  }

  return blocks;
}

export default function LegalMarkdown({
  text,
  sectionSlug,
}: {
  text: string;
  sectionSlug: string;
}) {
  const blocks = parseBlocks(text);

  return (
    <div className="space-y-3 break-words text-sm text-[#cbd5e1] leading-7">
      {blocks.map((b, bi) => {
        if (b.type === "hr") {
          return <hr key={bi} className="my-6 border-[#1e293b]" />;
        }

        if (b.type === "code") {
          return (
            <pre
              key={bi}
              className="overflow-x-auto rounded-lg bg-[#020617] border border-[#1e293b] p-3 font-mono text-xs leading-relaxed text-[#e2e8f0]"
            >
              {b.body}
            </pre>
          );
        }

        if (b.type === "blockquote") {
          return (
            <blockquote
              key={bi}
              className="border-l-2 border-[#6366f1]/40 pl-4 text-[#94a3b8] italic"
            >
              {b.lines.map((line, li) => (
                <p key={li}>{renderInline(line, `${bi}-bq-${li}`)}</p>
              ))}
            </blockquote>
          );
        }

        if (b.type === "ul" || b.type === "ol") {
          const List = b.type === "ul" ? "ul" : "ol";
          return (
            <List
              key={bi}
              className={`pl-5 space-y-1.5 ${b.type === "ul" ? "list-disc" : "list-decimal"}`}
            >
              {b.items.map((item, li) => (
                <li key={li}>{renderInline(item, `${bi}-${li}`)}</li>
              ))}
            </List>
          );
        }

        if (b.type === "h") {
          const level = Math.min(b.level, 6);
          const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
          const id = b.id ? `${sectionSlug}-${b.id}` : undefined;
          return (
            <Tag key={bi} id={id} className={HEADING_CLASSES[level]}>
              {renderInline(b.text, `${bi}-h`)}
            </Tag>
          );
        }

        if (b.type === "table") {
          return (
            <div key={bi} className="overflow-x-auto my-3 rounded-lg border border-[#1e293b]">
              <table className="w-full min-w-[20rem] text-sm border-collapse">
                {b.headers.length > 0 ? (
                  <thead>
                    <tr className="bg-[#020617] border-b border-[#1e293b]">
                      {b.headers.map((cell, ci) => (
                        <th
                          key={ci}
                          className="px-3 py-2 text-left font-semibold text-[#f1f5f9] whitespace-nowrap"
                        >
                          {renderInline(cell, `${bi}-th-${ci}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                ) : null}
                <tbody>
                  {b.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-[#1e293b] last:border-b-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 align-top text-[#cbd5e1]">
                          {renderInline(cell, `${bi}-${ri}-${ci}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return (
          <p key={bi}>
            {b.lines.map((l, li) => (
              <span key={li}>
                {li > 0 ? <br /> : null}
                {renderInline(l, `${bi}-${li}`)}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
