import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-participation-economy-6eorztp6p.vercel.app"),
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
