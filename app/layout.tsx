import type { Metadata } from "next";
import Script from "next/script";
import "../styles.css";

const supabaseBrowserConfig = `window.aitechSupabaseConfig = ${JSON.stringify({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "",
}).replaceAll("<", "\\u003c")};`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aitechinnovations.com"),
  icons: { icon: "/assets/logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script id="aitech-supabase-config" dangerouslySetInnerHTML={{ __html: supabaseBrowserConfig }} />
        {children}
        <Script src="/script.js?v=20260715-strict-consent-1" strategy="afterInteractive" />
        <Script src="/ai-chat-widget.js?v=20260714-client-acquisition-analytics-4" strategy="afterInteractive" />
      </body>
    </html>
  );
}
