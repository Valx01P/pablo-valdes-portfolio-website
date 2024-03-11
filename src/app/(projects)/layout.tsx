import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details",
  description: "My full stack developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"background"}>
        <h1 className="w-full text-white">bruh details layout</h1>
        {children}
      </body>
    </html>
  );
}
