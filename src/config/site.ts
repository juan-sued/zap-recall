export const siteConfig = {
  title: 'ZapRecall',
  description: 'Dê um ZAP na sua mente',
  url: 'https://projeto8-zaprecall-juansued.vercel.app/assets/logo.png', // alterar para o novo
  ogImage: 'https://projeto8-zaprecall-juansued.vercel.app/assets/logo.png',
  links: {
    twitter: 'https://twitter.com/juansued',
    github: 'https://github.com/juan-sued',
  },

  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'Juan Sued',
      url: 'https:github/juan-sued',
    },
  ],

  creator: 'Juan Sued',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: ' siteConfig.url',
    title: ' siteConfig.name',
    description: ' siteConfig.description',
    siteName: 'siteConfig.name',
    images: [
      {
        url: ' siteConfig.ogImage',
        width: 1200,
        height: 630,
        alt: 'siteConfig.name',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZapRecall',
    description: 'Dê um ZAP na sua mente',
    images: ['https://projeto8-zaprecall-juansued.vercel.app/assets/logo.png'],
    creator: '@juansued',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `https://projeto8-zaprecall-juansued.vercel.app/site.webmanifest`,
}

export type SiteConfig = typeof siteConfig
