import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoadvisoragent.com"),
  title: "AutoAdvisor Agent — AI Tools for Dealerships",
  description:
    "From first click to final sale — AI that guides buyers and proves vendor ROI. Two powerful AI tools for modern dealerships.",
  alternates: {
    canonical: "https://autoadvisoragent.com",
  },
  openGraph: {
    title: "AutoAdvisor Agent — AI Tools for Dealerships",
    description:
      "From first click to final sale — AI that guides buyers and proves vendor ROI.",
    url: "https://autoadvisoragent.com",
    siteName: "AutoAdvisor Agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoAdvisor Agent — AI Tools for Dealerships",
    description:
      "From first click to final sale — AI that guides buyers and proves vendor ROI.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AutoAdvisor Agent",
  url: "https://autoadvisoragent.com",
  telephone: "+16105457466",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-610-545-7466",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
