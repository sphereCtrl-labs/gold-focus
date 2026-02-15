import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ServicesSection } from "@/components/landing/services-section";
import { StateSection } from "@/components/landing/stat-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StateSection />
    </main>
  );
}
