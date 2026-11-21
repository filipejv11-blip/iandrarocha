import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { buildLegalServiceJsonLd, SITE_CONFIG } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/foto-citacao.png",
        width: 1080,
        height: 1350,
        alt: "Iandra Diniz Rocha — Advocacia e Consultoria Jurídica (OAB/PB 34.774)",
      },
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Logotipo Iandra Rocha Advocacia e Consultoria Jurídica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/foto-citacao.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalServiceJsonLd = buildLegalServiceJsonLd();

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body
        className="font-sans bg-[#F3F1ED] text-[#1E1E1E] antialiased"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
