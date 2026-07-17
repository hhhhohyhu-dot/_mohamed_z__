import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "mohamed_z_ | Nano Banana AI Gallery — Premium 4K AI Photography",
  description:
    "Discover premium 4K AI-generated photography by mohamed_z_. Shop stunning nature, cars, anime, portrait, fantasy, architecture, and more — powered by Nano Banana AI.",
  keywords:
    "AI photography, 4K images, Nano Banana AI, premium gallery, nature, cars, anime, portrait, fantasy, architecture, animals, digital art, Mohamed Z",
  authors: [{ name: "mohamed_z_" }],
  openGraph: {
    title: "mohamed_z_ | Nano Banana AI Gallery",
    description: "Premium 4K AI-generated photography. Stunning collections across 8 categories.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "mohamed_z_ | Nano Banana AI Gallery",
    description: "Premium 4K AI-generated photography",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
