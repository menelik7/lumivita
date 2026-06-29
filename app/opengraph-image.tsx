import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Branded social-share card, generated in-code (no photography needed).
// Mirrors the brand: ink ground, Cormorant wordmark (sand "Lumi" + amber
// "vita"), italic tagline. Next auto-injects og:image + twitter:image for "/".
export const alt = "Lumivita — Vintervelvære, vitenskapelig fundert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// readFile returns a Buffer that may be a view into a pooled allocation; copy
// into an exact-size ArrayBuffer so satori parses the font cleanly.
async function loadFont(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(join(process.cwd(), "app", file));
  return new Uint8Array(buf).buffer;
}

export default async function OpengraphImage() {
  const [medium, italic] = await Promise.all([
    loadFont("CormorantGaramond-500.ttf"),
    loadFont("CormorantGaramond-Italic.ttf"),
  ]);

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
          backgroundColor: "#1C2B3A",
          fontFamily: "Cormorant",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: 10,
            color: "#E8956D",
            marginBottom: 48,
          }}
        >
          LANSERING HØST 2026
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sunrise-arc mark (public/logo/lumivita-mark-amber.svg) */}
          <svg
            width="360"
            height="120"
            viewBox="0 0 132 44"
            style={{ marginBottom: 24 }}
          >
            <path d="M6 40 Q66 4 126 40 Q66 18 6 40 Z" fill="#E8956D" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 156,
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            <span style={{ color: "#F0EDE6" }}>Lumi</span>
            <span style={{ color: "#E8956D" }}>vita</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 46,
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(240,237,230,0.72)",
          }}
        >
          Vintervelvære. Vitenskapelig fundert.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: medium, weight: 500, style: "normal" },
        { name: "Cormorant", data: italic, weight: 400, style: "italic" },
      ],
    },
  );
}
