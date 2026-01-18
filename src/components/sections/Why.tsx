import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Zap, ShieldCheck, Target, Users, Layout } from "lucide-react";

export function Why() {
  const reasons = [
    { icon: Zap, text: "AI-assisted delivery = faster results" },
    { icon: Layout, text: "SOP-driven process" },
    { icon: Target, text: "Clear scope, clear outcomes" },
    { icon: Users, text: "Built for scalability" },
    { icon: ShieldCheck, text: "UK-based, founder-led" },
  ];

  return (
    <section className="py-20 bg-muted-text/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
            Why businesses choose AITech Innovations
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {reasons.map((item, i) => (
            <Card key={i} className="flex items-center gap-4 px-6 py-4 bg-background border-muted-text/10">
              <item.icon className="w-6 h-6 text-accent" />
              <span className="font-medium text-lg">{item.text}</span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
