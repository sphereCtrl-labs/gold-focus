import { TestimonialSection } from "@/components/landing/clients-section";
import { ContactSection } from "@/components/landing/contact-section";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ServicesSection } from "@/components/landing/services-section";
import { StateSection } from "@/components/landing/stat-section";
import { Footer } from "@/components/landing/footer-section";
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StateSection />
      <TestimonialSection />
      <ContactSection />
      <Footer/>
    </main>
  );
}
