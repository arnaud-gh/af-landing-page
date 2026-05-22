import type { Metadata } from "next";
import { Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Arnaud Fiora — Freelance Business Analyst, Belgium",
  description:
    "Freelance business analyst helping enterprise IT teams turn complex transformation work into clear processes, tools, and decisions.",
  openGraph: {
    title: "Arnaud Fiora — Freelance Business Analyst, Belgium",
    description:
      "At the intersection of business analysis, governance, process design, visual modelling, and M365 tooling.",
    type: "website",
  },
  twitter: {
    title: "Arnaud Fiora — Freelance Business Analyst, Belgium",
    description:
      "At the intersection of business analysis, governance, process design, visual modelling, and M365 tooling.",
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
      className={`${sourceSerif4.variable} ${jetbrainsMono.variable}`}
      style={
        {
          "--font-serif": "var(--font-source-serif-4), Georgia, serif",
          "--font-sans":  "var(--font-source-serif-4), Georgia, serif",
          "--font-mono":  "var(--font-jetbrains-mono), ui-monospace, Menlo, monospace",
        } as React.CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
}
