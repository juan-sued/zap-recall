import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'animate.css'
import { ReactNode } from 'react'
import Providers from './providers'
import Header from '@/components/layout/Header'
import { siteConfig } from '@/config/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
})
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  // keywords: siteConfig.keywords,
  // authors: siteConfig.authors,
  // creator: siteConfig.creator,
  // // themeColor: siteConfig.themeColor,
  // openGraph: siteConfig.openGraph,
  // twitter: siteConfig.twitter,
  // icons: siteConfig.icons,
  // manifest: siteConfig.manifest,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className}  bg-pinkTheme-500 dark:bg-blueTheme-500  text-slate-50 dark:text-slate-50 w-screen
        `}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
