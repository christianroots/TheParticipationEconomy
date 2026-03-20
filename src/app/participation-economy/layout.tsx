import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Participation Economy — Turning Consumption Into Ownership",
  description:
    "A framework for rebuilding capital ownership in modern market societies. What if a small fraction of what you already spend automatically bought you a tiny piece of the economy?",
  openGraph: {
    title: "The Participation Economy",
    description:
      "A framework for rebuilding capital ownership in modern market societies.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
