import { motion } from "framer-motion"

const projects = [
  {
    name: "Petal Studio",
    category: "Interior Design",
    description: "Brand new website for a boutique interior design studio. Built for elegance and conversions.",
    tags: ["Landing Page", "Custom Design"],
    color: "#f5f0eb",
  },
  {
    name: "Horizon Consulting",
    category: "Business Consulting",
    description: "Corporate multi-page site for a consulting firm. Clean, trustworthy, easy to update.",
    tags: ["Business Website", "WordPress"],
    color: "#eef2f8",
  },
  {
    name: "Coach Anna",
    category: "Life Coaching",
    description: "Personal brand site for a life coach. Built to communicate authority and attract ideal clients.",
    tags: ["Redesign", "Personal Brand"],
    color: "#f0f5f0",
  },
]

export function WorkflowsSection() {
  return (
    <section id="portfolio" className="py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
              Recent projects
            </h2>
            <a href="#contact" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Want yours here? →
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* Preview area */}
              <div
                className="h-44 p-5 relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                {/* Mockup lines */}
                <div className="bg-white rounded-lg p-3 shadow-sm border border-white/80">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 rounded bg-gray-200" />
                    <div className="w-3/4 h-2 rounded bg-gray-200" />
                    <div className="w-1/2 h-2 rounded bg-gray-200" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="w-16 h-5 rounded" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.7 }} />
                    <div className="w-16 h-5 rounded bg-gray-100" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-1">{project.category}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
