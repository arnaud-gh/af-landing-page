import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Arnaud Fiora — Enterprise IT transformation support",
  description:
    "Freelance business analyst helping enterprise IT teams turn complex transformation work into clear processes, tools, and decisions.",
  openGraph: {
    title: "Arnaud Fiora — Enterprise IT transformation support",
    description:
      "At the intersection of business analysis, governance, process design, visual modelling, and M365 tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={
        {
          "--font-sans": "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
          "--font-mono":
            "var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, monospace",
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
