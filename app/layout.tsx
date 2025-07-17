import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const livvic = Poppins({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
 })

export const metadata: Metadata = {
  title: "Net Trix Solutions Digital Agency",
  description: "Net Trix Solutions is a leading digital agency specializing in web development, branding, and online marketing. We help businesses grow with innovative digital solutions, creative design, and expert strategy tailored to your needs.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "Branding",
    "Online Marketing",
    "SEO",
    "Net Trix Solutions",
    "Creative Design",
    "Business Growth",
    "UI/UX",
    "Cloud Hosting",
    "Data Protection"
  ],
  openGraph: {
    title: "Net Trix Solutions Digital Agency",
    description: "Grow your business with innovative web development, branding, and marketing from Net Trix Solutions.",
    url: "https://net-trix.ca",
    siteName: "Net Trix Solutions",
    images: [
      {
        url: "/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Net Trix Solutions Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Trix Solutions Digital Agency",
    description: "Grow your business with innovative web development, branding, and marketing from Net Trix Solutions.",
    images: ["/dashboard.png"],
    site: "@Net-TrixSolutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${livvic.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
