import { Poppins, Outfit } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

export const metadata = {
  title: '100x Aura — Blog CMS',
  description: 'Blog content management for 100x Aura.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
