'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Heart,
  Bug,
  Eye,
  Activity,
  Baby,
  Accessibility,
  Ear,
  Syringe,
} from 'lucide-react'

const specialties = [
  {
    icon: Heart,
    name: 'Cardiología',
    description: 'ECG, ecocardiograma, Doppler y Holter con tratamientos personalizados.',
  },
  {
    icon: Bug,
    name: 'Dermatología',
    description: 'Diagnóstico de alergias, ácaros, hongos y cultivos.',
  },
  {
    icon: Eye,
    name: 'Oftalmología',
    description: 'Cirugía de párpados y tratamiento de úlceras corneales.',
  },
  {
    icon: Activity,
    name: 'Oncología',
    description: 'Biopsias, cirugía de tumores y quimioterapia personalizada.',
  },
  {
    icon: Baby,
    name: 'Reproducción',
    description: 'Inseminación, seguimiento gestacional y cuidados neonatales.',
  },
  {
    icon: Accessibility,
    name: 'Geriatría',
    description: 'Protocolos adaptados para animales mayores con menos riesgos.',
  },
  {
    icon: Ear,
    name: 'Otitis',
    description: 'Exploración por fibra óptica y cirugía de oído especializada.',
  },
  {
    icon: Syringe,
    name: 'Anestesia',
    description: 'Técnicas avanzadas con isoflurano y monitorización continua.',
  },
]

export default function Specialties() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="especialidades" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#2E9E6B] font-semibold tracking-widest text-sm uppercase mb-3">
            Especialidades
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Especialidades que marcan la diferencia
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Nuestro equipo cuenta con formación especializada en las áreas más demandadas
            de la medicina veterinaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((spec, i) => {
            const Icon = spec.icon
            return (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 border border-gray-100 rounded-xl hover:border-[#2E9E6B]/40 hover:shadow-md transition-all group bg-[#F8FAFC]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2E9E6B]/10 flex items-center justify-center mb-3 group-hover:bg-[#2E9E6B] transition-colors">
                  <Icon
                    size={20}
                    className="text-[#2E9E6B] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-[#1E293B] text-sm mb-1">{spec.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{spec.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
