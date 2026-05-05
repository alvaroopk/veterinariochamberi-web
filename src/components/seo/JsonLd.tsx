import {
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
} from '@/lib/constants'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: BUSINESS_NAME,
    description:
      'Centro veterinario con más de 35 años de experiencia en Chamberí, Madrid. Especialistas en cirugía, diagnóstico por imagen, cardiología y razas miniatura.',
    url: 'https://veterinariochamberi-web.vercel.app',
    telephone: BUSINESS_PHONE_DISPLAY,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C/ General Álvarez de Castro 24',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28010',
      addressCountry: 'ES',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:30',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:30',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '11:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/veterinarioschamberi/',
      'https://www.instagram.com/veterinarios_chamberi/',
    ],
    address_locality: 'Chamberí, Madrid',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
