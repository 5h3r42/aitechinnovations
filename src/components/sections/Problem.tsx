"use client";

import { Container } from "@/components/ui/Container";
import { useReveal } from "@/hooks/useReveal";
import {
  Bell,
  Info,
  LineChart,
  MousePointerClick,
  ShieldCheck,
  Timer,
} from "lucide-react";

export function Problem() {
  const { ref, className } = useReveal();
  const problems = [
    { label: "Unclear message", icon: Info },
    { label: "Weak call-to-action", icon: MousePointerClick },
    { label: "No trust signals", icon: ShieldCheck },
    { label: "Slow or cluttered pages", icon: Timer },
    { label: "No follow-up automation", icon: Bell },
    { label: "No tracking or visibility", icon: LineChart },
  ];

  return (
    <section ref={ref} className={`py-20 bg-background/50 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            If your website isn’t generating leads, <br className="hidden md:block" />
            the problem isn’t traffic — it’s the system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto mb-12">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-full border border-muted-text/15 bg-background/40 px-4 py-3 text-sm md:text-base text-primary-text/90 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted-text/10 text-highlight">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-base text-muted-text mb-4">
          The result? Missed enquiries, wasted spend, and no clear way to scale.
        </p>
        <p className="text-center text-xl text-highlight font-medium">
          We fix this by building structured, AI-assisted lead generation systems.
        </p>
      </Container>
    </section>
  );
}
