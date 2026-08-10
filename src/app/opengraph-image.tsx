import { ImageResponse } from "next/og";
import { DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";

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
            "radial-gradient(circle at 20% 20%, rgba(225, 29, 72, 0.18), transparent 40%), linear-gradient(135deg, #FAFAFF 0%, #F4F5F7 55%, #EEF0F6 100%)",
          color: "#0F172A",
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
          Open Source Organization
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#64748B",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Practical software — Paper & Workspace — open for everyone.
        </div>
      </div>
    ),
    { ...size },
  );
}
