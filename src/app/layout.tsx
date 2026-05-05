import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DemoBanner from '@/components/DemoBanner'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_INDEXED, BUSINESS_NAME } from '@/lib/constants'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Veterinario en Chamberí Madrid`,
  description:
    'Centro veterinario con más de 35 años de experiencia en Chamberí, Madrid. Cirugía, diagnóstico por imagen, odontología, cardiología y más. Atención en español, inglés y francés. Llama al 91 448 59 86.',
  keywords: ['veterinario Chamberí', 'clínica veterinaria Madrid', 'veterinario Madrid', 'veterinario razas miniatura', 'cirugía veterinaria Madrid'],
  openGraph: {
    title: `${BUSINESS_NAME} | Veterinario en Chamberí Madrid`,
    description:
      'Más de 35 años cuidando mascotas en Chamberí. Tecnología diagnóstica completa, cirugía avanzada y atención en 3 idiomas.',
    url: 'https://veterinariochamberi-web.vercel.app',
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Veterinario en Chamberí`,
    description: 'Más de 35 años cuidando mascotas en Chamberí, Madrid.',
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
  alternates: {
    canonical: 'https://veterinariochamberi-web.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <DemoBanner />
      </body>
    </html>
  )
}
