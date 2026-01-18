import { Container } from "@/components/ui/Container";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted-text/10 bg-background/95 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <div className="text-lg font-heading font-bold tracking-tight">
          <span className="text-primary-text">AI</span>
          <span className="text-accent">Tech</span>
          <span className="text-primary-text">Innovations</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <a className="text-primary-text/90 hover:text-primary-text transition-colors" href="#services">
            Services
          </a>
          <a className="text-primary-text/90 hover:text-primary-text transition-colors" href="#process">
            How it works
          </a>
          <a className="text-accent hover:text-accent/80 transition-colors" href="#audit">
            Get Free Audit
          </a>
        </nav>
      </Container>
    </header>
  );
}
