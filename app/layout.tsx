import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

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
      <body className={"flex flex-col w-dvw h-dvh"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
