import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Lazmi Chowdhury — Portfolio",
  description:
    "Product Designer & Front-End Developer specializing in clean, modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${caveat.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
