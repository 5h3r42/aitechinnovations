import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const siteRoutes = [
  "",
  "website-content-services",
  "ads-setup-services",
  "ai-automation-services",
  "ai-chatbot-development",
  "ai-receptionist-for-accountants",
  "ai-lead-generation-automation",
  "crm-automation-services",
  "appointment-booking-automation",
  "free-strategy-call",
  "website-design-for-service-businesses",
  "free-ai-audit",
  "blog",
  "blog/how-small-businesses-use-ai",
  "blog/what-is-ai-workflow-automation",
  "blog/ai-chatbots-for-customer-service",
  "about",
  "website-design-maidstone",
  "website-design-kent",
  "website-design-london",
  "privacy",
  "terms",
] as const;

type SiteRoute = (typeof siteRoutes)[number];

const routeFiles: Record<SiteRoute, string> = {
  "": "index.html",
  "website-content-services": "website-content-services.html",
  "ads-setup-services": "ads-setup-services.html",
  "ai-automation-services": "ai-automation-services.html",
  "ai-chatbot-development": "ai-chatbot-development.html",
  "ai-receptionist-for-accountants": "ai-receptionist-for-accountants.html",
  "ai-lead-generation-automation": "ai-lead-generation-automation.html",
  "crm-automation-services": "crm-automation-services.html",
  "appointment-booking-automation": "appointment-booking-automation.html",
  "free-strategy-call": "free-strategy-call.html",
  "website-design-for-service-businesses": "website-design-for-service-businesses.html",
  "free-ai-audit": "free-ai-audit.html",
  blog: "blog.html",
  "blog/how-small-businesses-use-ai": "blog-how-small-businesses-use-ai.html",
  "blog/what-is-ai-workflow-automation": "blog-what-is-ai-workflow-automation.html",
  "blog/ai-chatbots-for-customer-service": "blog-ai-chatbots-for-customer-service.html",
  about: "about.html",
  "website-design-maidstone": "website-design-maidstone.html",
  "website-design-kent": "website-design-kent.html",
  "website-design-london": "website-design-london.html",
  privacy: "privacy.html",
  terms: "terms.html",
};

export type SitePage = {
  route: SiteRoute;
  body: string;
  metadata: Metadata;
  jsonLd: string[];
};

function match(html: string, pattern: RegExp) {
  return html.match(pattern)?.[1]?.trim() ?? "";
}

function cleanBody(html: string) {
  const body = match(html, /<body[^>]*>([\s\S]*?)<\/body>/i)
    .replace(/<script[^>]+src=["'][^"']*script\.js[^"']*["'][^>]*><\/script>/gi, "")
    .replace(/(?:src|href)=["']assets\//gi, (value) => `${value.slice(0, -7)}/assets/`)
    .replace(/href=["'](?:\.\/|\/)?about\.html["']/gi, 'href="/about/"')
    .replace(/href=["'](?:\.\/|\/)?website-design-(maidstone|kent|london)\.html["']/gi, 'href="/website-design-$1/"')
    .trim();

  return body.replace(/href="\/([^"#?]+)([?#][^"]*)?"/g, (full, route, suffix = "") => {
    if (!isSiteRoute(route) || route === "") return full;
    return `href="/${route}/${suffix}"`;
  });
}

function getCanonical(route: SiteRoute) {
  return route ? `https://www.aitechinnovations.com/${route}/` : "https://www.aitechinnovations.com/";
}

function normalizeJsonLd(value: string) {
  let json = value.replace(
    /https:\/\/www\.aitechinnovations\.com\/(about|website-design-(?:maidstone|kent|london))\.html/g,
    "https://www.aitechinnovations.com/$1",
  );

  for (const route of [...siteRoutes].filter(Boolean).sort((left, right) => right.length - left.length)) {
    const routePattern = route.replaceAll("/", "\\/");
    json = json.replace(
      new RegExp(`https:\\/\\/www\\.aitechinnovations\\.com\\/${routePattern}(?=[\"#])`, "g"),
      (url) => `${url}/`,
    );
  }

  return json;
}

export function isSiteRoute(route: string): route is SiteRoute {
  return siteRoutes.includes(route as SiteRoute);
}

export function getSitePage(route: string): SitePage {
  if (!isSiteRoute(route)) throw new Error(`Unknown site route: ${route}`);

  const html = fs.readFileSync(path.join(process.cwd(), "content", "pages", routeFiles[route]), "utf8");
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const ogTitle = match(html, /<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i) || title;
  const ogDescription = match(html, /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i) || description;
  const ogType = match(html, /<meta\s+property=["']og:type["']\s+content=["']([^"']*)["']/i) || "website";
  const canonical = getCanonical(route);
  const jsonLd = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].map(
    (result) => normalizeJsonLd(result[1].trim()),
  );

  return {
    route,
    body: cleanBody(html),
    jsonLd,
    metadata: {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        type: ogType === "article" ? "article" : "website",
        url: canonical,
        siteName: "AITech Innovations",
      },
    },
  };
}
