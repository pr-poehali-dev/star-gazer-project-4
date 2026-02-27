import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "We talk about your business, goals, and what you need. I ask the right questions — no generic brief.",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "Proposal & scope",
    description: "You get a clear proposal: scope, timeline, price. No surprises, no hidden costs.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Design & build",
    description: "I design and develop your site with regular check-ins. You review, give feedback, I refine.",
    icon: "Layers",
  },
  {
    number: "04",
    title: "Launch & handover",
    description: "Site goes live. I walk you through managing it yourself, and stay available for 30 days post-launch.",
    icon: "Rocket",
  },
]

export function ProductDirectionSection() {
  return (
    <section id="process" className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight max-w-md">
            How we work together
          </h2>
        </motion.div>

        {/* Steps horizontal line */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gray-100 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-gray-100 bg-white shadow-sm"
                >
                  <Icon name={step.icon} fallback="Circle" size={20} style={{ color: "var(--brand-blue)" }} />
                </div>

                <div className="text-xs font-mono text-gray-300 mb-2">{step.number}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
