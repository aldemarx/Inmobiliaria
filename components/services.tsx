import { Building2, PaintBucket, Home, Hammer, Ruler, Truck } from "lucide-react"

const services = [
  {
    icon: <Building2 size={48} className="text-primary mb-4" />,
    title: "Construcción",
    description:
      "Desarrollamos proyectos de construcción desde cero, cumpliendo con los más altos estándares de calidad.",
  },
  {
    icon: <PaintBucket size={48} className="text-primary mb-4" />,
    title: "Acabados",
    description: "Ofrecemos servicios de acabados de primera calidad para darle el toque final perfecto a tu proyecto.",
  },
  {
    icon: <Home size={48} className="text-primary mb-4" />,
    title: "Remodelación",
    description: "Transformamos espacios existentes para darles nueva vida y funcionalidad según tus necesidades.",
  },
  {
    icon: <Hammer size={48} className="text-primary mb-4" />,
    title: "Mantenimiento",
    description:
      "Servicios de mantenimiento preventivo y correctivo para mantener tus espacios en óptimas condiciones.",
  },
  {
    icon: <Ruler size={48} className="text-primary mb-4" />,
    title: "Diseño",
    description: "Diseñamos espacios funcionales y estéticos que se adaptan a tus necesidades y preferencias.",
  },
  {
    icon: <Truck size={48} className="text-primary mb-4" />,
    title: "Transporte",
    description: "Contamos con servicio de transporte de materiales para facilitar el desarrollo de tu proyecto.",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades de construcción y remodelación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

