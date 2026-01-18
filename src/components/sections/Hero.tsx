"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background gradients or effects could go here */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_20%,_var(--color-accent),_transparent_50%)]" />

      <Container className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
          AI-Assisted Lead Generation Systems <br className="hidden md:block" />
          for Businesses
        </h1>
        <p className="text-lg md:text-xl text-muted-text max-w-2xl mx-auto mb-10 leading-relaxed">
          We design and build conversion-focused websites, funnels, and
          automation using AI — delivered fast, structured, and without
          freelancers.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("audit")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get a Free Mini Audit
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Services
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium text-muted-text uppercase tracking-wider">
          <span>Built in the UK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>AI-First</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>System-Driven Delivery</span>
        </div>
      </Container>
    </section>
  );
}
