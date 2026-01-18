import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <Why />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
