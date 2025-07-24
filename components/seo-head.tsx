import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEOHead({
  title = 'Kleber Silva - Desenvolvedor Full Stack',
  description = 'Desenvolvedor Full Stack especializado em React, Next.js, Node.js, NestJS, PostegreSQL, Docker e AWS. Criando soluções web modernas e escaláveis.',
  canonical = 'https://klebersilva.vercel.app',
  ogImage = '/og-image.jpg',
}: SEOHeadProps) {
  return (
    <Head>
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Preconnect to external domains */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Critical CSS inline */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body { font-family: 'Inter', system-ui, sans-serif; }
          .hero-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        `,
        }}
      />

      {/* Performance hints */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Security headers */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
      />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

      {/* PWA meta tags */}
      <meta name="application-name" content="Kleber Silva Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kleber Silva" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#2563eb" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Alternate languages */}
      <link
        rel="alternate"
        hrefLang="pt-BR"
        href="https://klebersilva.vercel.app"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://klebersilva.vercel.app/en"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://klebersilva.vercel.app"
      />
    </Head>
  );
}
