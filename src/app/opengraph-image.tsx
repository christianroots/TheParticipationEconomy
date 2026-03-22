import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Order Effects — Christian Samuel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
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
            color: "#6B7280",
            marginBottom: 32,
          }}
        >
          CHRISTIAN SAMUEL
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#1A1A1A",
            textAlign: "center" as const,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Order Effects
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6B7280",
            marginTop: 28,
            textAlign: "center" as const,
            maxWidth: 600,
          }}
        >
          Long-form theses on economics, technology, and the future
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            right: 60,
            height: 2,
            background: "#15803D",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
