import type { Metadata } from "next";
import { Playfair_Display, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://the-participation-economy-6eorztp6p.vercel.app"
  ),
  title: "First Principles — Christian Samuel",
  description:
    "Long-form theses on economics, technology, and the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${lora.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
