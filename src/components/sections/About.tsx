'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#2E9E6B] font-semibold tracking-widest text-sm uppercase mb-3">
            Sobre nosotros
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Más de 35 años al lado de tu mascota
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En el Centro Veterinario Chamberí llevamos desde 1990 cuidando la salud de perros
            y gatos del barrio. Nuestra clínica combina la experiencia de más de tres décadas
            con tecnología diagnóstica de última generación: radiología, ecografía,
            ecocardiografía y cirugía laparoscópica, todo bajo un mismo techo.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Somos especialistas en razas miniatura y en el cuidado de animales mayores, con
            protocolos específicos que reducen el estrés y los riesgos para tus mascotas.
            Además, atendemos en español, inglés y francés para que nada sea una barrera cuando
            tu mascota lo necesite.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 35, suffix: '+', label: 'Años de experiencia' },
              { value: 8, suffix: '', label: 'Especialidades' },
              { value: 3, suffix: '', label: 'Idiomas de atención' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-[#F8FAFC] rounded-xl">
                <p className="text-3xl font-bold text-[#1B6CA8]">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1559839914-17aae19cec71?w=800&q=80"
            alt="Veterinaria examinando a un perro pequeño en consulta — Centro Veterinario Chamberí"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
