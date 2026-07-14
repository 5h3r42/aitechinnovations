import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StaticPage } from "@/components/static-page";
import { getSitePage, isSiteRoute, siteRoutes } from "@/lib/site-pages";

type RouteProps = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return siteRoutes.filter(Boolean).map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const route = (await params).slug.join("/");
  return isSiteRoute(route) ? getSitePage(route).metadata : {};
}

export default async function RoutedPage({ params }: RouteProps) {
  const route = (await params).slug.join("/");
  if (!isSiteRoute(route)) notFound();
  return <StaticPage page={getSitePage(route)} />;
}
