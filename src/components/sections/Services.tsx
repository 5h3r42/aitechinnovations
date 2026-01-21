"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

// Google Calendar Appointment Schedule booking page (public link)
const BOOK_CALL_URL = "https://calendar.app.google/qNhJA1tHbWnmLtB6A";

export function Services() {
  const services = [
    {
      title: "AI Website & Funnel Audit",
      description: "Find the exact fixes that unlock more leads.",
      features: [
        "Find the exact fixes that unlock more leads.",
        "Solo — £199: Messaging clarity + positioning, UX + trust issues",
        "Solo — £199: Conversion blockers, Priority fixes list",
        "Solo — £199: Quick-win CTA improvements",
        "Pro — £349: Everything in Solo, AI-optimised CTA + section rewrites",
        "Pro — £349: Funnel structure recommendations, 15-min Loom walkthrough",
      ],
      deliverables: [],
      price: "£199–£349",
      cta: "Request Audit",
      action: "audit",
    },
    {
      title: "AI Lead Generation Funnel Setup",
      description:
        "A complete lead system that captures, qualifies, and books calls.",
      features: [
        "A complete lead system that captures, qualifies, and books calls.",
        "From £1,200 — Most Popular",
        "Conversion-focused landing funnel",
        "Lead capture form (AI-ready), Email notifications + tracking",
        "Booking calendar integration, Deployment + handover",
        "Advanced (£1,800) includes: Automated follow-up sequence, Lead scoring (hot / warm / cold), CRM-ready structure",
      ],
      deliverables: [],
      price: "£1,200–£1,800",
      cta: "Book a Call",
      action: "book_call",
      highlight: true,
    },
    {
      title: "AI Content & Conversion Growth",
      description: "Consistent content + conversion improvement each month.",
      features: [
        "Consistent content + conversion improvement each month.",
        "3-month minimum",
        "Starter — £450/month: Content plan + prompts, Weekly publishing cadence, Monthly optimisation",
        "Growth — £750/month — Recommended: Everything in Starter, Funnel CTA testing, Conversion tweaks + tracking",
        "Authority — £1,100/month: Everything in Growth, Lead quality optimisation, Quarterly funnel rebuild",
      ],
      deliverables: [],
      price: "£450–£1,100 / month",
      cta: "Discuss Retainer",
      action: "audit",
    },
  ];

  const handleAction = (action: string) => {
    if (action === "audit") {
      document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
    } else if (action === "book_call") {
      window.open(BOOK_CALL_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="services"
      className="scroll-mt-16 pt-12 pb-16 md:pt-16 md:pb-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
      <Container className="relative mx-auto max-w-[1100px] px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading">
            Services
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/60 max-w-xl mx-auto">
            Structured packages designed for clarity and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className={`flex flex-col p-8 border border-muted-text/20 bg-background transition-shadow duration-300 hover:shadow-[0_0_35px_-6px_var(--color-accent)] hover:border-accent/70 ${
                service.highlight
                  ? "border-accent/60 shadow-[0_0_40px_-10px_var(--color-accent)] bg-background/80"
                  : ""
              }`}
            >
              <h3 className="text-xl font-bold font-heading mb-2">
                {service.title}
              </h3>
              <div className="mt-4 mb-6 space-y-3 flex-grow">
                {/* The description acts as the first item basically, or just header */}
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-text"
                  >
                    <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              {service.deliverables.length > 0 && (
                <div className="mt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-text/80">
                    What you get
                  </div>
                  <div className="mt-3 space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-text/80"
                      >
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent/70" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-muted-text/10 mt-auto">
                <div className="text-2xl font-bold mb-4 text-center">
                  {service.price}
                </div>
                <Button
                  className="w-full"
                  variant="outline"
                  type="button"
                  onClick={() => handleAction(service.action)}
                >
                  {service.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
