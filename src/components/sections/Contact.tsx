'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  MAPS_EMBED_URL,
  SCHEDULE,
} from '@/lib/constants'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Form data:', data)
    reset()
  }

  return (
    <section id="contacto" className="py-20 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#2E9E6B] font-semibold tracking-widest text-sm uppercase mb-3">
            Contacto
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pide tu cita
          </h2>
          <p className="text-slate-500 text-lg">
            Estamos en el corazón de Chamberí, cerca de ti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8] focus:border-transparent transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...register('email', {
                      required: 'El email es obligatorio',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email no válido' },
                    })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8] focus:border-transparent transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="6XX XXX XXX"
                    {...register('phone')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8] focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="¿En qué podemos ayudarte? Cuéntanos sobre tu mascota..."
                  {...register('message', { required: 'El mensaje es obligatorio' })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8] focus:border-transparent transition resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {isSubmitSuccessful && (
                <div className="bg-[#2E9E6B]/10 border border-[#2E9E6B]/20 rounded-lg p-4 text-[#2E9E6B] text-sm font-medium">
                  ¡Mensaje enviado! Te contactaremos en breve.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#1B6CA8] text-white font-semibold py-4 rounded-xl hover:bg-[#155a8a] disabled:opacity-60 transition-colors"
              >
                <Send size={18} />
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#1B6CA8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm">Dirección</p>
                  <p className="text-slate-500 text-sm">{BUSINESS_ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#1B6CA8] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm">Teléfono</p>
                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                    className="text-[#1B6CA8] font-medium hover:underline"
                  >
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#1B6CA8] shrink-0" />
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm">Email</p>
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="text-[#1B6CA8] hover:underline text-sm"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#1B6CA8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm mb-1">Horario</p>
                  {SCHEDULE.map((s) => (
                    <p key={s.days} className="text-slate-500 text-xs">
                      <span className="font-medium text-slate-600">{s.days}:</span> {s.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-56 sm:h-72">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Centro Veterinario Chamberí — C/ General Álvarez de Castro 24, Madrid"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
