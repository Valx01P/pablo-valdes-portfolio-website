import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pablo Valdes | Full Stack Developer",
  description: "My full stack developer portfolio website",
  icons: {
    icon: '/icon-two.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " background"}>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
