import type { Metadata } from "next";
import DetailsSidebar from "@/components/DetailsSidebar";

export const metadata: Metadata = {
  title: "Details",
  description: "Project Details Page",
  icons: {
    icon: "/icon-two.svg",
  },
};

// Nested layout under the root layout — must not render <html>/<body>.
// The fixed sidebar lays itself out; pages add their own left offset.
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DetailsSidebar />
      {children}
    </>
  );
}
