import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kleber Silva - Desenvolvedor Full Stack',
    template: '%s | Kleber Silva - Desenvolvedor Full Stack',
  },
  description:
    'Desenvolvedor Full Stack especializado em React, Next.js, Node.js, NestJS, Docker, PostegreSQL e AWS.',
  keywords: [
    'desenvolvedor full stack',
    'full stack developer',
    'software engineer',
    'kleber silva',
    'react developer',
    'nextjs developer',
    'nodejs developer',
    'nestjs developer',
    'web development',
    'frontend developer',
    'backend developer',
    'fullstack developer',
    'são paulo',
    'rio de janeiro',
    'natal',
    'brasil',
    'typeScript',
    'javascript',
    'node.js',
    'react',
    'next.js',
    'material ui',
    'radix ui',
    'lucide Icons',
    'express.js',
    'nestjs',
    'jwt',
    'prismaORM',
    'docker',
    'postgreSQL',
    'mongodb',
    'git',
    'swagger',
    'aws',
    'jest',
    'ci/cd',
    'github',
    'github actions',
  ],
  authors: [{ name: 'Kleber Silva', url: 'https://klebersilva.vercel.app' }],
  creator: 'Kleber Silva',
  publisher: 'Kleber Silva',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://klebersilva.vercel.app',
    title: 'Kleber Silva - Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack especializado em React, Next.js, Node.js, NestJS, PostegreSQL e AWS. Criando soluções web modernas e escaláveis.',
    siteName: 'Kleber Silva Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleber Silva - Desenvolvedor Full Stack',
      },
    ],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://klebersilva.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kleber Silva',
              jobTitle: 'Desenvolvedor Full Stack',
              description:
                'Desenvolvedor Full Stack especializado em React, Next.js, Node.js, NestJS, PostgreSQL, Docker e AWS',
              url: 'https://klebersilva.vercel.app',
              sameAs: [
                'https://github.com/Raqui333',
                'https://linkedin.com/in/kleber333',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Natal',
                addressCountry: 'BR',
              },
              email: 'klebersilva2025@gmail.com',
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'NestJS',
                'JWT',
                'Express.js',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'Github',
                'Git',
                'AWS',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
