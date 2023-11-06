import './globals.css'
import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import 'animate.css'
import { ReactNode } from 'react'
import Providers from './providers'
import Header from '@/components/layout/Header'
import { siteConfig } from '@/config/site'
import { Toaster } from '@/components/ui/toaster'

const poppins = Recursive({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900', '1000'],
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
        className={`${poppins.className}  bg-pinkTheme-500 overflow-x-hidden dark:bg-blueTheme-500  text-slate-50 dark:text-slate-50 w-screen
        `}
      >
        <Providers>
          <Header />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
