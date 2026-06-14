import { StaticPage } from "@/components/static-page";
import { getSitePage } from "@/lib/site-pages";

const page = getSitePage("");

export const metadata = page.metadata;

export default function HomePage() {
  return <StaticPage page={page} />;
}
