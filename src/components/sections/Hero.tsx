'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, ChevronDown } from 'lucide-react'
import { BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#1E293B]/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#F59E0B] font-semibold tracking-widest text-sm uppercase mb-4"
        >
          Centro Veterinario en Chamberí, Madrid
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tu veterinario de confianza en Chamberí desde 1990
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10"
        >
          Más de 35 años cuidando perros y gatos con los mejores medios diagnósticos y
          quirúrgicos de Madrid. Consultas en español, inglés y francés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`tel:${BUSINESS_PHONE}`}
            className="flex items-center justify-center gap-2 bg-[#F59E0B] text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#D97706] transition-colors shadow-lg"
            aria-label={`Llamar al ${BUSINESS_PHONE_DISPLAY}`}
          >
            <Phone size={20} />
            Llama ahora — {BUSINESS_PHONE_DISPLAY}
          </a>
          <Link
            href="#servicios"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
          >
            Ver servicios
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
