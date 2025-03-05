"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Arena Blanca Construcciones Logo"
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-secondary hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="font-medium text-secondary hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="font-medium text-secondary hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="#proyectos" className="font-medium text-secondary hover:text-primary transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="font-medium text-secondary hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="#proyectos"
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="font-medium text-secondary hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
