import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const steps = [
    {
      title: "Step 1 — Analyse",
      desc: "We audit your website and current lead flow.",
    },
    {
      title: "Step 2 — Build",
      desc: "We build your funnel using AI + proven frameworks.",
    },
    {
      title: "Step 3 — Launch",
      desc: "Everything is connected, tracked, and tested.",
    },
    {
      title: "Step 4 — Improve",
      desc: "We refine based on real data.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            How It Works
          </h2>
          <p className="text-xl text-highlight font-medium">
            No freelancers. No guesswork. Just systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-bold text-lg mb-6 shadow-[0_0_15px_-3px_var(--color-accent)]">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">
                {step.title}
              </h3>
              <p className="text-muted-text text-sm">
                {step.desc}
              </p>
              
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-accent/20 -z-10" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
