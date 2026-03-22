import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Abundance Thesis — Order Effects",
  description:
    "Why AI will make the world richer, freer, and more human than mainstream commentary suggests. Three propositions on deflation, the solo economy, and the blue collar premium.",
  openGraph: {
    title: "The Abundance Thesis",
    description:
      "Why AI will make the world richer, freer, and more human than we feared.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ATLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
