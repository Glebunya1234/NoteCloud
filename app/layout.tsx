import { url } from "inspector";
import "./globals.css";
import type { Metadata } from "next";
import favicon from "./favicon.ico";
import { Inter, Poppins, Raleway } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const fonts = Poppins({ weight: "400", subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "NoteCloud",
  description:
    "The NoteCloud project is an innovative web application designed for effective self-management and productivity improvement. It is an intelligent system for organizing notes and tasks based on cloud technologies.",
  authors: [{ name: "Kalihailung", url: "https://github.com/Glebunya1234" }],
  keywords: [
    "note",
    "cloud",
    "NoteCloud",
    "Note-Cloud",
    "Note Cloud",
    "organization",
    "productivity",
    "self-menagement",
  ],
  openGraph: {
    title: "NoteCloud",
    description: "Created by Glebunya1234",
    type: "website",

    url: "https://note-cloud-five.vercel.app", // Замініть на реальний URL вашої сторінки
  },
  twitter: {
    title: "NoteCloud",
    description: "Created by Glebunya1234",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </head>
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
