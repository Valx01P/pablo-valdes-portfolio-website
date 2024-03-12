import type { Metadata } from "next";
import DetailsSidebar from "@/components/DetailsSidebar";

export const metadata: Metadata = {
  title: "Details",
  description: "Project Details Page",
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
      <body className="bg-yt flex justify-between">
          <DetailsSidebar />
          {children}
      </body>
    </html>
  );
}
