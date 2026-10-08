import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins, Rozha_One } from "next/font/google";
import { site } from "./lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const rozha = Rozha_One({
  variable: "--font-rozha",
  subsets: ["latin", "devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} Chai — Premium Kadak Tea`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Makkhan Gold",
    "Makkhan Gold Chai",
    "मक्खन गोल्ड चाय",
    "CTC tea",
    "kadak chai",
    "Indian tea brand",
    "tea manufacturer",
  ],
  icons: {
    icon: "/makhanfav.png",
    apple: "/makhanfav.png",
  },
  openGraph: {
    title: `${site.name} Chai`,
    description: site.description,
    images: ["/makhanlogo.png"],
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e5e2c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fraunces.variable} ${rozha.variable} antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
