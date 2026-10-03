import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UCSC Undergraduate Law Journal",
  description: "A student-led publication at UC Santa Cruz dedicated to undergraduate research and analysis on law, legal institutions, and public policy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
