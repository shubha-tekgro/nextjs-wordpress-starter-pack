import "@/app/globals.css";
import { Header, Footer, Sidebar } from "@/components";
import { ReactNode } from "react";

export const metadata = {
  title: "MyStarter",
  description: "Next.js + Tailwind + App Router starter",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
