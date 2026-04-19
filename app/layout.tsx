import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mirakuta — Windows dev setup, done right.",
  description: "One command. Everything you need. Nothing you don't.",
  metadataBase: new URL("https://mirakuta.dev"),
  openGraph: {
    title: "mirakuta",
    description: "Modern dev environment for Windows, one line away.",
    url: "https://mirakuta.dev",
    siteName: "mirakuta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mirakuta",
    description: "Modern dev environment for Windows, one line away.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
