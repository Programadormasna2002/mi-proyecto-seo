import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Sitio Optimizado - Home",
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  keywords: ["Next.js", "SEO", "optimización web"],
  openGraph: {
    title: "Mi Sitio Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js.",
    images: ["/images/seo-image.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
