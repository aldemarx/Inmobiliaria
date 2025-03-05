import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Propietario de Vivienda",
    content:
      "Excelente trabajo en la remodelación de mi casa. El equipo fue muy profesional y cumplieron con el plazo acordado. Totalmente recomendados.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "María Fernández",
    role: "Gerente de Proyectos",
    content:
      "Contratamos a Arena Blanca para la construcción de nuestras nuevas oficinas y quedamos muy satisfechos con el resultado. Gran atención al detalle.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Juan Pérez",
    role: "Arquitecto",
    content:
      "He trabajado con Arena Blanca en varios proyectos y siempre han demostrado un alto nivel de profesionalismo y calidad en sus acabados.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Testimonios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lo que nuestros clientes dicen sobre nosotros y nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-current" size={18} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

