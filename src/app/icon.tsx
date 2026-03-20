import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0E1A12",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C5D9A8",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.5px",
        }}
      >
        FP
      </div>
    ),
    { ...size }
  );
}
