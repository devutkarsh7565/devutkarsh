import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import Experience from "@/components/HomePage/Experience";
import Skills from "@/components/HomePage/Skills";
import Projects from "@/components/HomePage/Project/Project";
import Education from "@/components/HomePage/Education";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <ToastContainer /> */}
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />

        {/* <ContactSection /> */}
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
