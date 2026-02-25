import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isittoolatecalculator.com"), // change later if domain different
  title: {
    default: "Is It Too Late Calculator | Time Investment & Opportunity Cost Tool",
    template: "%s | Is It Too Late Calculator",
  },
  description:
    "Calculate whether it's too late to start coding, investing, gym, or college. Model your remaining time, daily hours, and opportunity cost instantly.",

    verification:{
      google: "8J0-VGQomTg0GZQCw8ravfINM37ziZDVmYMMeJyxTps"
    },

    keywords: [
    "is it too late to start coding at 30",
    "is it too late to start investing at 35",
    "is it too late to start gym at 40",
    "is it too late to go back to college at 30",
    "time investment calculator",
    "opportunity cost calculator",
    "is it too late to start",
    "is it too late to ",
    "is it too late",
    "is it too",
  ],
  openGraph: {
    title: "Is It Too Late Calculator",
    description:
      "Model your realistic time window and opportunity cost for career, investing, fitness, or education goals.",
    url: "https://isittoolatecalculator.com",
    siteName: "Is It Too Late Calculator",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-L9BY2RV2Q6"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L9BY2RV2Q6');
  `}
</Script>
        {children}
      </body>
    </html>
  );
}
