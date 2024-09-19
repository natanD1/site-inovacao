import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Video from "@/components/Video";
import { Metadata } from "next";
import CoolMarquee from "@/components/Marquee/CoolMarquee";

export const metadata: Metadata = {
  title: "IT Cejam",
  description: "Este é o site do setor de Inovação e Técnologia do CEJAM",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <CoolMarquee />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}