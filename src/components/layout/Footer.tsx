import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_FACEBOOK,
  BUSINESS_INSTAGRAM,
  SCHEDULE,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/assets/logo.png"
            alt={BUSINESS_NAME}
            width={140}
            height={42}
            className="h-10 w-auto object-contain brightness-0 invert mb-4"
          />
          <p className="text-slate-400 text-sm leading-relaxed">
            Más de 35 años cuidando las mascotas de Chamberí con los mejores medios
            diagnósticos y quirúrgicos. Atención en español, inglés y francés.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href={BUSINESS_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Centro Veterinario Chamberí"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href={BUSINESS_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Centro Veterinario Chamberí"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Contacto</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#2E9E6B]" />
              <span>{BUSINESS_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#2E9E6B]" />
              <a href={`tel:${BUSINESS_PHONE}`} className="hover:text-white transition-colors">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-[#2E9E6B]" />
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white transition-colors">
                {BUSINESS_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Horario</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            {SCHEDULE.map((item) => (
              <li key={item.days} className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#2E9E6B]" />
                <div>
                  <span className="font-medium text-white">{item.days}</span>
                  <br />
                  <span>{item.hours}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
