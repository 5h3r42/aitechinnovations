import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-muted-text/10 bg-background/95 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-heading font-bold tracking-tight"
        >
          <Image
            src="/images/logo.webp"
            alt="AITechInnovations logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--color-primary-text) 0%, var(--color-primary-text) 12%, var(--color-accent) 12%, var(--color-accent) 36%, var(--color-primary-text) 36%, var(--color-primary-text) 100%)",
            }}
          >
            AITechInnovations
          </span>
        </a>
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
