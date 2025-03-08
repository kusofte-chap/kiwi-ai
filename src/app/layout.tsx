import type { Metadata } from "next";
import "./globals.css";


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
      <head>
        <link rel="icon" href="/logo.png" sizes="any" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@300;400;500;600;700;800&family=Sansita:ital@0;1&display=swap" rel="stylesheet"></link>
      </head>
      <body className='bg-white'>
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
