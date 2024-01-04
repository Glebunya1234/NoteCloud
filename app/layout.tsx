import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins,  Raleway } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const fonts = Poppins({weight: "400", subsets:['devanagari']})

export const metadata: Metadata = {
  title: "NoteCloud",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </html>
  );
}
