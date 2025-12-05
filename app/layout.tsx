import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Comercial Prisma - Distribuidor de Pinturas y Productos de Construcción",
  description:
    "Tu aliado en color, calidad y construcción. Distribuidor exclusivo de As Pinturas en Barranquilla. Pinturas de tráfico, vinilos, esmaltes y soluciones anticorrosivas.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/log.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/log.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/log.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/log.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
