import { Container } from "@/components/ui/Container";

export function FAQ() {
  const faqs = [
    {
      q: "Do you run ads?",
      a: "Not initially. We focus on conversion and systems first.",
    },
    {
      q: "How fast is delivery?",
      a: "Audits: 48 hours. Funnels: 5–7 days.",
    },
    {
      q: "Who does the work?",
      a: "Everything is delivered using AI-assisted systems — no outsourcing.",
    },
    {
      q: "Is this suitable for my business?",
      a: "If you rely on leads, yes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            F.A.Q
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-muted-text/5 p-6 rounded-xl border border-muted-text/10">
              <h3 className="text-lg font-bold font-heading mb-2 text-primary-text">
                {faq.q}
              </h3>
              <p className="text-muted-text">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
