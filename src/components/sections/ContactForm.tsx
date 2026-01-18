"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
    mainGoal: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Read a helpful message from the API (JSON or text)
      const text = await res.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch {
        data = { raw: text };
      }

      if (!res.ok) {
        const apiMsg = data?.error || data?.message || "Something went wrong";
        const details = data?.details ? ` (${JSON.stringify(data.details)})` : "";
        throw new Error(`${apiMsg}${details}`);
      }

      setStatus("idle");
      setMessage("Thanks! We've received your details and will be in touch shortly.");
      setFormData({
        name: "",
        email: "",
        website: "",
        businessType: "",
        mainGoal: "",
        notes: "",
      });
    } catch (error: any) {
      console.error("Lead submit failed:", error);
      setStatus("error");
      setMessage(error?.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="audit" className="py-20 bg-muted-text/5">
      <Container>
        <div className="max-w-2xl mx-auto bg-background/60 p-8 md:p-10 rounded-3xl border border-muted-text/20 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-8">
            Get a Free Mini Website Audit
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-muted-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-muted-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-1 text-muted-text">
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                placeholder="https://example.com"
                className="w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-medium mb-1 text-muted-text"
              >
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                required
                placeholder="e.g. B2B SaaS, Agency, Local Service"
                className="w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                value={formData.businessType}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="mainGoal" className="block text-sm font-medium mb-1 text-muted-text">
                Main Goal
              </label>
              <select
                id="mainGoal"
                name="mainGoal"
                required
                className="site-select w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                value={formData.mainGoal}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select your priority
                </option>
                <option value="more-leads">More Leads</option>
                <option value="better-conversion-rate">Better Conversion Rate</option>
                <option value="lead-automation">Lead Automation</option>
                <option value="content-growth">Content &amp; Growth</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1 text-muted-text">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Anything else you'd like us to know"
                className="w-full rounded-xl border border-muted-text/30 bg-background/50 px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-6 shadow-[0_10px_30px_-15px_var(--color-accent)]"
              size="lg"
              disabled={status === "loading"}
              variant="primary"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  sending...
                </>
              ) : (
                "Get My Free Audit"
              )}
            </Button>

            {message && (
              <p
                className={`text-center text-sm mt-4 ${status === "error" ? "text-red-400" : "text-highlight"}`}
              >
                {message}
              </p>
            )}

            <p className="text-center text-sm text-muted-text mt-4">Note: No spam. No obligation.</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
