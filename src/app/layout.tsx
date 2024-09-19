"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />

      <body className={`bg-[#121212] ${inter.className}`}>
        <Providers>
          <TracingBeam>
            <Header />
            {children}
          </TracingBeam>
          <BackgroundBeams />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html >
  );
}

import { Providers } from "./providers"; import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundBeams } from "@/components/ui/background-beams";

