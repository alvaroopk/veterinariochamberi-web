'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, PawPrint, Globe, Microscope } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: '35 años de experiencia',
    description:
      'Desde 1990 somos referencia veterinaria en Chamberí. Experiencia que se traduce en diagnósticos más precisos y tratamientos más eficaces.',
  },
  {
    icon: PawPrint,
    title: 'Especialistas en razas miniatura',
    description:
      'Chihuahuas, Pinscher y otras razas pequeñas requieren cuidados específicos. Somos expertos en sus particularidades anatómicas y de salud.',
  },
  {
    icon: Globe,
    title: 'Atención en 3 idiomas',
    description:
      'Atendemos en español, inglés y francés. Porque la salud de tu mascota no debe tener barreras idiomáticas.',
  },
  {
    icon: Microscope,
    title: 'Tecnología diagnóstica completa',
    description:
      'Radiología, ecografía, ecocardiografía y cirugía laparoscópica en nuestras instalaciones. Sin derivaciones innecesarias.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-[#1B6CA8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#F59E0B] font-semibold tracking-widest text-sm uppercase mb-3">
            Por qué elegirnos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Por qué confiar en nosotros?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5 p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
                  <Icon size={28} className="text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{reason.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
