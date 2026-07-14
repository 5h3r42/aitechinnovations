import type { SitePage } from "@/lib/site-pages";

export function StaticPage({ page }: { page: SitePage }) {
  return (
    <>
      {page.jsonLd.map((json, index) => (
        <script
          key={`${page.route || "home"}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: json }}
        />
      ))}
      <div className="next-page-root" dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}
