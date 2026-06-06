import type { Metadata } from "next";
import AppWrapper from "@/components/AppWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjeevan Muralitharan-Portfolio",
  description: "Software Engineering portfolio landing page showcasing MERN stack applications, clean interfaces, and scalable architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text min-h-full overflow-x-hidden">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
