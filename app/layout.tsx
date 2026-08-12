import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matilda Method | Why capable women stay stuck",
  description:
    "Watch the Matilda Method VSL: why high-performing women stay stuck in people-pleasing and self-doubt, and what a neuroscience-backed pattern shift looks like in practice. Book a 15-minute clarity call.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
