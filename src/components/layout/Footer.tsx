import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-muted-text/10 py-10 mt-20">
      <Container className="flex flex-col items-start gap-3 text-left">
        <div className="text-lg font-heading font-bold text-primary-text">
          AITech Innovations Ltd
        </div>
        <div className="text-sm text-muted-text">
          AI-Assisted Lead Generation Systems for UK Businesses
        </div>
        <div className="text-sm text-muted-text">
          Registered in England & Wales
        </div>
        <div className="text-sm text-muted-text">
          Company No: 15076403 · VAT No: GB498138444
        </div>
        <div className="text-sm text-muted-text w-full text-center">
          © 2024 AITech Innovations Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
