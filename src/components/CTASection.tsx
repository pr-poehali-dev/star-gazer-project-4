import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section id="contact" className="py-28 border-t border-gray-100" style={{ backgroundColor: "var(--brand-blue)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-white/5 text-xs text-blue-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Currently accepting new projects
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.1] mb-5">
            Ready for a website <br className="hidden md:block" />that actually works?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-lg mx-auto">
            Tell me about your project. I'll get back to you within 24 hours with honest thoughts and a clear next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@alexnikitin.dev"
              className="px-7 py-3.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm flex items-center gap-2"
            >
              <Icon name="Mail" size={15} />
              Write me an email
            </a>
            <a
              href="https://t.me/alexnikitin"
              className="px-7 py-3.5 border border-blue-400/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm flex items-center gap-2"
            >
              <Icon name="Send" size={15} />
              Message on Telegram
            </a>
          </div>

          <p className="mt-8 text-xs text-blue-300/60">
            No commitment required. Free 30-min discovery call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
