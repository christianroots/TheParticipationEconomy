import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empire on the Edge — Order Effects",
  description:
    "How the world's last superpower is fighting five wars at once — and why it cannot win all of them. A geopolitical and financial thesis, sequel to The Great Reset (2020).",
  openGraph: {
    title: "Empire on the Edge",
    description:
      "How the world's last superpower is fighting five wars at once — and why it cannot win all of them.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function EELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
