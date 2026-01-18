"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

export function Proof() {
  const points = [
    "Demo funnel builds",
    "Conversion-focused frameworks",
    "Prompt-driven copy systems",
    "Continuous iteration",
  ];

  return (
    <section className="py-20 bg-background">
      <Container className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Our approach is proven — <br />
            even before ads or scale.
          </h2>
          <div className="space-y-4 mb-8">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-highlight" />
                <span className="text-lg text-muted-text">{point}</span>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How It Works
          </Button>
        </div>
        
        
      </Container>
    </section>
  );
}
