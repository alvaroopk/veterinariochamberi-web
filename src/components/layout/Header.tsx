'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY } from '@/lib/constants'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="#inicio" onClick={() => setMenuOpen(false)}>
          <Image
            src="/assets/logo.png"
            alt="Centro Veterinario Chamberí"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#1B6CA8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            className="hidden sm:flex items-center gap-2 bg-[#1B6CA8] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#155a8a] transition-colors"
            aria-label={`Llamar al ${BUSINESS_PHONE_DISPLAY}`}
          >
            <Phone size={16} />
            <span>{BUSINESS_PHONE_DISPLAY}</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-[#1B6CA8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS_PHONE}`}
            className="flex items-center gap-2 bg-[#1B6CA8] text-white text-sm font-semibold px-4 py-2 rounded-full w-fit hover:bg-[#155a8a] transition-colors"
          >
            <Phone size={16} />
            <span>{BUSINESS_PHONE_DISPLAY}</span>
          </a>
        </div>
      )}
    </header>
  )
}
