import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cardales Village | Barrio Privado',
  description: 'Barrio privado en Cardales, Buenos Aires. Seguridad 24hs, amenities premium y un estilo de vida en comunidad rodeado de naturaleza.',
  icons: {
    icon: '/images/cardales-village-logo.png',
    apple: '/images/cardales-village-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}