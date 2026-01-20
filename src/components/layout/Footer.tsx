import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-muted-text/20 py-14 md:py-16 mt-20 bg-gradient-to-b from-background/80 via-background/90 to-background/95">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 text-left">
            <div className="text-lg font-heading font-bold text-primary-text">
              AITech Innovations Ltd
            </div>
            <div className="text-sm text-muted-text">
              AI-Assisted Lead Generation Systems for Businesses
            </div>
            <div className="text-sm text-muted-text">
              AI-first. System-driven delivery. No freelancers.
            </div>
            <div className="text-sm text-muted-text">
              Registered in England & Wales
            </div>
            <div className="text-sm text-muted-text">
              Company No: 15076403 · VAT No: GB498138444
            </div>
          </div>

          <div className="space-y-3 text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-text">
              Quick Links
            </h3>
            <nav
              className="flex flex-col gap-2 text-sm text-muted-text"
              aria-label="Footer"
            >
              <a
                className="hover:text-primary-text transition"
                href="#services"
              >
                Services
              </a>
              <a className="hover:text-primary-text transition" href="#process">
                How it works
              </a>
              <a className="hover:text-primary-text transition" href="#audit">
                Free Audit
              </a>
              <a className="hover:text-primary-text transition" href="#audit">
                FAQ
              </a>
            </nav>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-text">
                Services
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-text">
                <li>Website &amp; Funnel Audit</li>
                <li>AI Lead Generation Funnel Setup</li>
                <li>AI Content &amp; Growth (Monthly)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-text">
                Contact
              </h3>
              <div className="mt-3 flex flex-col gap-1 text-sm text-muted-text">
                <a
                  className="hover:text-primary-text transition"
                  href="mailto:support@aitechinnovations.com"
                >
                  support@aitechinnovations.com
                </a>
                <span>Replies within 24-48h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-muted-text/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-muted-text">
          <div>© 2024 AITech Innovations Ltd. All rights reserved.</div>
          <div className="text-muted-text/70">Privacy · Terms</div>
        </div>
        <div className="text-xs opacity-50 mt-4">
          Build: {process.env.NEXT_PUBLIC_BUILD_STAMP}
        </div>
      </Container>
    </footer>
  );
}
