import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Abundance Thesis — Why AI Will Make the World Richer, Freer, and More Human";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(145deg, #0E1A12 0%, #152019 50%, #0A1209 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase" as const,
            color: "#4A7C2F",
            marginBottom: 28,
          }}
        >
          FIRST PRINCIPLES
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#F0EDE4",
            textAlign: "center" as const,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          The Abundance Thesis
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8A9E8D",
            textAlign: "center" as const,
            maxWidth: 700,
            fontStyle: "italic",
          }}
        >
          Why AI Will Make the World Richer, Freer, and More Human Than We Feared
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#8A9E8D",
            marginTop: 32,
          }}
        >
          Christian Samuel · 2026
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            right: 60,
            height: 2,
            background: "#4A7C2F",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
