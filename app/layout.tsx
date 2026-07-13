import type { Metadata } from "next";
import Script from "next/script";
import "../styles.css";

const consentBootstrap = `
window.aitechAnalyticsParameters = {};
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
try {
  const analyticsUrl = new URL(window.location.href);
  const internalSetting = analyticsUrl.searchParams.get('internal');
  if (internalSetting === '1') localStorage.setItem('aitech_internal_traffic', '1');
  if (internalSetting === '0') localStorage.removeItem('aitech_internal_traffic');
  if (internalSetting !== null) {
    analyticsUrl.searchParams.delete('internal');
    history.replaceState(null, '', analyticsUrl.pathname + analyticsUrl.search + analyticsUrl.hash);
  }
  if (localStorage.getItem('aitech_internal_traffic') === '1') {
    window.aitechAnalyticsParameters.traffic_type = 'internal';
  }
  if (localStorage.getItem('aitech_cookie_consent') === 'accepted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (error) {}
gtag('js', new Date());
gtag('config', 'G-LTL4JXMYP2', window.aitechAnalyticsParameters);
`;

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
        <Script id="aitech-consent-bootstrap" strategy="beforeInteractive">
          {consentBootstrap}
        </Script>
        <script id="aitech-supabase-config" dangerouslySetInnerHTML={{ __html: supabaseBrowserConfig }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTL4JXMYP2"
          strategy="afterInteractive"
        />
        {children}
        <Script src="/script.js?v=20260711-ai-platform-enquiries" strategy="afterInteractive" />
        <Script src="/ai-chat-widget.js?v=20260713-public-chat-mvp" strategy="afterInteractive" />
      </body>
    </html>
  );
}
