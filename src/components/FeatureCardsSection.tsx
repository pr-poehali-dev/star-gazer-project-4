import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const problems = [
  {
    icon: "Clock",
    problem: "Your website is slow",
    solution: "I optimize every site to load in under 2 seconds — because speed is revenue.",
  },
  {
    icon: "AlertTriangle",
    problem: "DIY website looks unprofessional",
    solution: "Custom-designed WordPress sites that reflect your brand and build instant trust.",
  },
  {
    icon: "TrendingDown",
    problem: "Visitors don't convert",
    solution: "Strategic layout and copy structure built to turn visitors into paying clients.",
  },
  {
    icon: "Wrench",
    problem: "Can't update it yourself",
    solution: "I hand over the keys — you manage content easily, without touching code.",
  },
  {
    icon: "Search",
    problem: "Google can't find you",
    solution: "Technical SEO built in from day one: schema, metadata, sitemap, performance.",
  },
  {
    icon: "ShieldOff",
    problem: "Security concerns",
    solution: "SSL, backups, firewall, and regular updates. Your site is protected.",
  },
]

export function FeatureCardsSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* About block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              I'm a WordPress developer working with ambitious small businesses
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-2"
          >
            <p className="text-gray-500 leading-relaxed mb-4">
              For the past 6 years, I've been building WordPress websites for coaches, consultants, service businesses, and online experts who need more than a template.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              I handle everything — from strategy and design to development and launch. My clients get a site that works, looks sharp, and fits exactly what they do.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} className="text-gray-500" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Alex Nikitin</div>
                <div className="text-xs text-gray-400">WordPress Developer · Remote · EU</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Problems & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Common problems I solve</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
            Sound familiar?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white p-8 hover:bg-gray-50/80 transition-colors"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(30,58,110,0.08)" }}
              >
                <Icon name={item.icon} fallback="Circle" size={16} style={{ color: "var(--brand-blue)" }} />
              </div>
              <p className="text-sm font-medium text-red-500 mb-2">{item.problem}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}