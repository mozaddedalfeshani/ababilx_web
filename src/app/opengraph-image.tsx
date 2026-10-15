import { ImageResponse } from "next/og";
import {
  CHAT_NAME,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  WORKSPACE_NAME,
} from "@/lib/seo";

export const alt = DEFAULT_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoUrl = new URL("/logo.png", SITE_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(255, 255, 255, 0.16), transparent 55%), #000000",
          color: "#FFFFFF",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <img
            src={logoUrl}
            width={88}
            height={88}
            alt=""
            style={{ borderRadius: 20 }}
          />
          <span
            style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1.5 }}
          >
            {SITE_NAME}
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: -2,
            textAlign: "center",
            marginBottom: 16,
            maxWidth: 900,
          }}
        >
          {"Software that respects people."}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#9A9A9A",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          {`${SITE_NAME} builds private software for people and teams.`}
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 36,
            fontSize: 22,
            color: "#D8D8D8",
          }}
        >
          <span>{CHAT_NAME}</span>
          <span style={{ color: "#5A5A5A" }}>·</span>
          <span>{WORKSPACE_NAME}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
