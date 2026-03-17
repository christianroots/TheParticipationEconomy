import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Participation Economy — Turning Consumption Into Ownership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #ecfdf5 50%, #f0fdf4 100%)",
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
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#15803D",
            marginBottom: 24,
          }}
        >
          THE PARTICIPATION ECONOMY
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#1A1A1A",
            textAlign: "center" as const,
            lineHeight: 1.15,
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Turning Consumption</span>
          <span>Into Ownership</span>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#6B7280",
            marginTop: 32,
            textAlign: "center" as const,
            maxWidth: 600,
          }}
        >
          A framework for rebuilding capital ownership in modern market societies
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#6B7280",
            marginTop: 24,
            fontStyle: "italic",
          }}
        >
          A concept by Christian Samuel
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            right: 60,
            height: 3,
            background: "#15803D",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
