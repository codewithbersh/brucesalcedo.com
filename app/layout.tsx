import type { Metadata } from "next";
import "@/styles/globals.css";
import { GeistSans as font } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "@/components/providers/providers";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Navigation } from "./_components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.png",
        href: "/logo-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  description: siteConfig.description,
  verification: {
    google: "S5J6W5nKD972peB-ngoxLamABDNjl_BqUYma6HvjfEU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("relative bg-background antialiased", font.className)}
      >
        <Providers>
          <div className="mx-auto flex max-w-[608px] flex-col gap-16 py-16 sm:gap-32 sm:py-32">
            <Header />
            <main>{children}</main>
            <Footer />
            <Navigation />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
