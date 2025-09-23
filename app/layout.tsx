import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Working Title Collective",
  description: "Collective headed by local beerfluencer Adam Cunard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
