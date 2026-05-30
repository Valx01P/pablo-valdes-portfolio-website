import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import BackgroundLayer from "@/components/BackgroundLayer";
import Lightbox from "@/components/Lightbox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pablovaldes.com"),
  title: "Pablo Valdes | Full Stack Developer",
  description: "My full stack developer portfolio website",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/icon-two.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: "Pablo Valdes | Full Stack Developer",
    description: "Check out my full stack developer portfolio and projects.",
    url: "https://pablovaldes.com", // your deployed domain
    siteName: "Pablo Valdes",
    images: [
      {
        url: "/images/portfolio-site-dark.webp",
        width: 1200,
        height: 630,
        alt: "Pablo Valdes portfolio preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Valdes | Full Stack Developer",
    description: "Explore my projects and web development work.",
    images: ["/images/portfolio-site-dark.webp"]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundLayer />
        <Lightbox />
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
