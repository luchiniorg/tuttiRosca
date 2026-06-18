import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Products } from "@/components/Products";
import { CustomWork } from "@/components/CustomWork";
import { About } from "@/components/About";
import { Expansion } from "@/components/Expansion";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Lienzo completo, sin marco lateral */}
      <main className="w-full flex-1 bg-paper">
        <Hero />
        <TrustBar />
        <Products />
        <CustomWork />
        <About />
        <Expansion />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
