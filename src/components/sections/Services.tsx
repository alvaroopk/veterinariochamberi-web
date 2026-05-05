'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Stethoscope,
  Scissors,
  Scan,
  ShieldCheck,
  Smile,
  Plane,
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta y Diagnóstico',
    description:
      'Revisiones completas, análisis clínicos de sangre y orina, pruebas hormonales y detección de enfermedades infecciosas.',
  },
  {
    icon: Scissors,
    title: 'Cirugía Avanzada',
    description:
      'Cirugía general, laparoscópica y de mínima invasión. Especializados en razas pequeñas con los máximos estándares de seguridad.',
  },
  {
    icon: Scan,
    title: 'Diagnóstico por Imagen',
    description:
      'Radiografía digital, ecografía y ecocardiografía. Punción ecoguiada para diagnósticos precisos sin desplazamientos.',
  },
  {
    icon: ShieldCheck,
    title: 'Vacunación y Prevención',
    description:
      'Calendario vacunal completo, desparasitación interna y externa, y sistema de recordatorio personalizado.',
  },
  {
    icon: Smile,
    title: 'Odontología Veterinaria',
    description:
      'Limpieza dental profesional, con opciones sin anestesia general para animales mayores o de riesgo.',
  },
  {
    icon: Plane,
    title: 'Trámites y Viajes',
    description:
      'Pasaporte europeo, certificados sanitarios, microchip y toda la documentación para viajar con tu mascota.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-20 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#2E9E6B] font-semibold tracking-widest text-sm uppercase mb-3">
            Servicios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Todo lo que tu mascota necesita, en un solo lugar
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Desde la revisión anual hasta la cirugía especializada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#1B6CA8]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B6CA8]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B6CA8] transition-colors">
                  <Icon
                    size={24}
                    className="text-[#1B6CA8] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-[#1E293B] mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
