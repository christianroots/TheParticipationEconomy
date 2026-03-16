import type { Metadata } from "next";
import "./globals.css";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Participation Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Participation Economy",
    description:
      "A framework for rebuilding capital ownership in modern market societies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
