import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="Arena Blanca Construcciones Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Empresa peruana dedicada a la construcción, remodelación y acabados de proyectos residenciales y
              comerciales.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-300 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-300 hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-gray-300 hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Construcción
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Remodelación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Acabados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Diseño
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Av. Principal 123, Lima, Perú</li>
              <li className="text-gray-300">+51 123 456 789</li>
              <li className="text-gray-300">info@arenablancaconstrucciones.com.pe</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Arena Blanca Construcciones. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-yellow-500 text-white p-3 rounded-full transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

