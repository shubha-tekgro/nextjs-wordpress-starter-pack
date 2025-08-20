import "@/app/globals.css";
import { Footer, Header } from "@/components";
import { ReactNode } from "react";

export const metadata = {
  title: "MyStarter",
  description: "Next.js + Tailwind + App Router starter",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
