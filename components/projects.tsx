import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Edificio Residencial Los Pinos",
    category: "Construcción",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Remodelación Casa Miraflores",
    category: "Remodelación",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Oficinas Corporativas Centro Empresarial",
    category: "Diseño y Construcción",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Acabados Condominio Las Palmas",
    category: "Acabados",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Centro Comercial La Marina",
    category: "Construcción",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Remodelación Hotel San Isidro",
    category: "Remodelación",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce algunos de nuestros proyectos más destacados y descubre por qué somos la mejor opción para tu próximo
            proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative rounded-lg overflow-hidden shadow-md">
              <div className="relative h-[300px]">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="project-overlay absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.category}</p>
                  <Link
                    href="#"
                    className="bg-primary hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contacto"
            className="bg-secondary hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
          >
            Solicita una Cotización
          </Link>
        </div>
      </div>
    </section>
  )
}

