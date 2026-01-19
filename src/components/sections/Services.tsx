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
      title: "Website & Funnel Audit",
      description: "Identify conversion issues",
      features: [
        "Messaging clarity",
        "UX & trust signals",
        "Actionable priority fixes",
      ],
      deliverables: [
        "Conversion bottleneck review",
        "Priority fixes list",
        "Quick-win CTA improvements",
      ],
      price: "£149–£399",
      cta: "Request Audit",
      action: "audit",
    },
    {
      title: "AI Lead Generation Funnel Setup",
      description: "High-converting landing page",
      features: [
        "Lead capture + automation",
        "Email follow-up",
        "Booking + tracking",
      ],
      deliverables: [
        "Conversion-focused page structure",
        "AI-ready lead capture form",
        "Google Sheets lead logging",
        "Email notifications",
        "Deployment + handover notes",
      ],
      price: "£750–£1,500",
      cta: "Book a Call",
      action: "book_call",
      highlight: true,
    },
    {
      title: "AI Content & Growth (Monthly)",
      description: "AI-generated content",
      features: ["Posting system", "Monthly optimisation"],
      deliverables: [
        "Content plan + prompts",
        "Weekly publishing cadence",
        "Ongoing conversion tweaks",
      ],
      price: "£300–£900 / month",
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
    <section id="services" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Services
          </h2>
          <p className="text-muted-text max-w-xl mx-auto">
            Structured packages designed for clarity and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className={`flex flex-col p-8 border border-muted-text/20 bg-background transition-shadow duration-300 hover:shadow-[0_0_35px_-6px_var(--color-accent)] hover:border-accent/70`}
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
                {/* Adding the audit's bullet points explicitly if not covered */}
                {service.title.includes("Audit") && (
                  <div className="flex items-start gap-2 text-sm text-muted-text">
                    <Check className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                    <span>Identify conversion issues</span>
                  </div>
                )}
              </div>
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

              <div className="pt-6 border-t border-muted-text/10 mt-auto">
                <div className="text-2xl font-bold mb-4">{service.price}</div>
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
