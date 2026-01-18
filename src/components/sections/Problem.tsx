import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { XCircle } from "lucide-react";

export function Problem() {
  const problems = [
    "Confusing messaging",
    "No clear call-to-action",
    "No follow-up or tracking",
  ];

  return (
    <section className="py-20 bg-background/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            If your website isn’t generating leads, <br className="hidden md:block" />
            the problem isn’t traffic — it’s the system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {problems.map((item, i) => (
            <Card key={i} className="flex flex-col items-center text-center p-8 bg-background/30 border-red-500/10 hover:border-red-500/30">
              <XCircle className="w-10 h-10 text-red-500 mb-4 opacity-80" />
              <p className="font-medium text-lg">{item}</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-xl text-highlight font-medium">
          We fix this by building structured, AI-assisted lead generation systems.
        </p>
      </Container>
    </section>
  );
}
