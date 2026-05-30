import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import BackgroundLayer from "@/components/BackgroundLayer";
import Lightbox from "@/components/Lightbox";
import ResumeModal from "@/components/ResumeModal";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://pablovaldes.com";
const DESCRIPTION =
  "Pablo Valdes — Full Stack Web Developer with interests in Cloud, Robotics, and AI. Explore my projects, experience, and work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pablo Valdes | Full Stack Developer",
  description: DESCRIPTION,
  applicationName: "Pablo Valdes Portfolio",
  authors: [{ name: "Pablo Valdes", url: SITE_URL }],
  creator: "Pablo Valdes",
  publisher: "Pablo Valdes",
  keywords: [
    "Pablo Valdes",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Cloud",
    "AI",
    "portfolio",
    "Miami",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/icon-two.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: "Pablo Valdes | Full Stack Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pablo Valdes",
    locale: "en_US",
    images: [
      {
        url: "/images/portfolio-site-dark.webp",
        width: 1200,
        height: 630,
        alt: "Pablo Valdes — Full Stack Developer portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Valdes | Full Stack Developer",
    description: DESCRIPTION,
    images: ["/images/portfolio-site-dark.webp"]
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pablo Valdes",
    url: SITE_URL,
    jobTitle: "Full Stack Developer",
    description: DESCRIPTION,
    image: `${SITE_URL}/images/portfolio-site-dark.webp`,
    sameAs: [
      "https://github.com/Valx01P",
      "https://www.linkedin.com/in/pablovaldes01/",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Florida International University" },
      { "@type": "CollegeOrUniversity", name: "Miami Dade College" },
    ],
    knowsAbout: ["Full Stack Development", "Cloud Computing", "Robotics", "Artificial Intelligence"],
    address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <BackgroundLayer />
        <Lightbox />
        <ResumeModal />
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
