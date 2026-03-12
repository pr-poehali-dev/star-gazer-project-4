import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const addons = [
  {
    name: "Advanced SEO Package",
    price: "$300",
    icon: "Search",
    summary: "Rank higher and get found by the right people.",
    details:
      "Includes in-depth keyword research, on-page optimization for all pages, schema markup (structured data), XML sitemap, robots.txt configuration, and a custom SEO strategy report. You'll also get a Google Search Console & Bing Webmaster setup so you can track rankings from day one.",
  },
  {
    name: "Analytics & Tracking Setup",
    price: "$250",
    icon: "BarChart2",
    summary: "Know exactly who visits your site and what they do.",
    details:
      "Full Google Analytics 4 installation and configuration, Google Tag Manager setup, conversion goals and event tracking (form submissions, button clicks, scroll depth), and a basic dashboard so you always know how your site is performing. GDPR-compliant cookie consent included.",
  },
  {
    name: "Multilingual Support",
    price: "$150",
    icon: "Globe",
    summary: "Reach customers in their own language.",
    details:
      "WordPress multilingual setup using WPML or Polylang (your choice). Includes language switcher design, hreflang tags for correct SEO indexing per language, and configuration of up to 2 additional languages. Translation of content is not included but I'll guide you through the process.",
  },
  {
    name: "Custom Animations & Interactivity",
    price: "$200",
    icon: "Sparkles",
    summary: "Make your site feel alive and memorable.",
    details:
      "Smooth scroll-triggered animations, hover effects, micro-interactions on buttons and cards, and parallax elements where appropriate. All animations are performance-optimised — they look great and don't slow down your page speed score.",
  },
  {
    name: "Post-Launch Maintenance",
    price: "$250–$500 / mo",
    icon: "ShieldCheck",
    summary: "Keep your site fast, secure, and up to date.",
    details:
      "Monthly WordPress core, plugin, and theme updates. Daily automated backups with 30-day retention. Uptime monitoring with instant alerts. Security scanning and malware removal. Up to 2 hours of small content changes per month included. Two tiers available: Basic ($250) covers updates + backups; Pro ($500) adds priority support and unlimited content edits.",
  },
  {
    name: "Content Migration + Copy Assistance",
    price: "$250",
    icon: "FileEdit",
    summary: "Move your existing content and sharpen your messaging.",
    details:
      "Transfer all text, images, and media from your old site (or Google Docs / Notion) to the new WordPress site — fully formatted and ready to publish. Includes a copy review pass: I'll tighten up your headlines, CTAs, and key paragraphs so they're clear and conversion-focused. Perfect if you have the content but need it done right.",
  },
]

export function AddOnsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Add-ons</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight max-w-sm">
              Power up your project
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              Optional extras you can add to any package. Pick what matters for your business — pay only for what you need.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start md:self-end px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "var(--brand-blue)" }}
          >
            Get a quote with Extras →
          </a>
        </motion.div>

        {/* Accordion list */}
        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {/* Row header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors group"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: openIndex === i ? "var(--brand-blue)" : "#f4f5f7",
                  }}
                >
                  <Icon
                    name={addon.icon}
                    fallback="Star"
                    size={15}
                    style={{ color: openIndex === i ? "#fff" : "var(--brand-blue)" }}
                  />
                </div>

                {/* Name + summary */}
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-700">
                    {addon.name}
                  </span>
                  <span className="hidden sm:inline text-sm text-gray-400 ml-2">
                    — {addon.summary}
                  </span>
                </div>

                {/* Price + chevron */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-sm font-semibold tabular-nums"
                    style={{ color: "var(--brand-blue)" }}
                  >
                    {addon.price}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className="text-gray-400 transition-transform duration-300"
                    style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 ml-[52px]">
                      <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                        {addon.details}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-xs text-gray-400 mt-5 text-center">
          All add-ons can be combined. Final price discussed during the discovery call.
        </p>
      </div>
    </section>
  )
}
