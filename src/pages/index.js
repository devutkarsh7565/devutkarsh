import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

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

        <ContactSection />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
