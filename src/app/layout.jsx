import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Joshua Smith',
    default:
      'Joshua Smith - Software Developer , Full-Stack Enthusiast , Tech Innovator',
  },
  description:
    "I'm Joshua Smith, a software designer and tech enthusiast based in Chicago. My passion for coding and technology, combined with my dedication to ongoing learning and adept problem-solving, positions me as a versatile and capable software engineer ready to tackle a wide range of challenges in the field.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
