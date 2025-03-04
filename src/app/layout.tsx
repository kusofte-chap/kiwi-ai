import type { Metadata } from "next";
import { Mukta_Malar } from "next/font/google";
import "./globals.css";

const mukta_malar = Mukta_Malar({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Ki AI",
  description: "Ki AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" type="image/svg+xml" />
      <body className={`${mukta_malar.className} bg-white `}>
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
