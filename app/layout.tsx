import type { Metadata } from "next";
import "@/styles/globals.css";
import { GeistSans as font } from "geist/font/sans";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Navigation } from "./_components/navigation";

export const metadata: Metadata = {
  title: "Bruce Salcedo",
  description: "Bruce Salcedo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative bg-background antialiased", font.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex max-w-[608px] flex-col gap-32 py-32">
            <Header />
            <main>{children}</main>
            <Footer />

            <Navigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
