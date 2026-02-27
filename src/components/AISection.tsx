import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    name: "Landing Page",
    from: "from $900",
    description: "A focused single-page site built to convert. Perfect for coaches, consultants, and product launches.",
    features: ["Custom design", "Mobile-first", "Contact form", "SEO basics", "1 round of revisions"],
    accent: false,
  },
  {
    name: "Business Website",
    from: "from $1,800",
    description: "A full multi-page WordPress site for small businesses ready to grow their online presence.",
    features: ["Up to 8 pages", "Custom design", "Blog ready", "Analytics setup", "Speed optimization", "2 rounds of revisions"],
    accent: true,
  },
  {
    name: "Redesign",
    from: "from $1,200",
    description: "Transform your outdated website into a clean, fast, modern experience — keeping what works.",
    features: ["Design overhaul", "Performance audit", "SEO cleanup", "Content migration", "2 rounds of revisions"],
    accent: false,
  },
]

export function AISection() {
  return (
    <section id="services" className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Services</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight max-w-sm">
              What I build for you
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Every project is custom — no page builders, no generic themes. Just clean code and careful design.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-7 flex flex-col border transition-shadow hover:shadow-md ${
                service.accent
                  ? "border-transparent text-white"
                  : "bg-white border-gray-100"
              }`}
              style={service.accent ? { backgroundColor: "var(--brand-blue)" } : {}}
            >
              <div className="mb-6">
                <p className={`text-xs uppercase tracking-widest mb-1 ${service.accent ? "text-blue-200" : "text-gray-400"}`}>
                  {service.name}
                </p>
                <p className={`text-2xl font-semibold tracking-tight ${service.accent ? "text-white" : "text-gray-900"}`}>
                  {service.from}
                </p>
              </div>
              <p className={`text-sm leading-relaxed mb-7 ${service.accent ? "text-blue-100" : "text-gray-500"}`}>
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Icon
                      name="Check"
                      size={13}
                      className={service.accent ? "text-blue-200" : ""}
                      style={!service.accent ? { color: "var(--brand-blue)" } : {}}
                    />
                    <span className={service.accent ? "text-blue-50" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto text-sm font-medium text-center py-2.5 px-4 rounded-lg border transition-colors ${
                  service.accent
                    ? "border-blue-300/50 text-white hover:bg-white/10"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                Get a quote →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
