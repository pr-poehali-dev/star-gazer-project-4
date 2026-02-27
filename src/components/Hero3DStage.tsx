import { Navbar } from "./Navbar"
import { LogoCloud } from "./LogoCloud"
import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"
import { Footer } from "./Footer"
import { motion } from "framer-motion"
import { WebsiteMockup } from "./DashboardMockup"

export function Hero3DStage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-white">
        <Navbar />

        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

        {/* Light blue tint top-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background: "radial-gradient(ellipse at 80% 20%, rgba(30,58,110,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Main hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-xs text-gray-500 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Available for new projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-[42px] md:text-5xl lg:text-[54px] font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6"
              >
                WordPress websites that{" "}
                <span style={{ color: "var(--brand-blue)" }}>work for your business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
              >
                I build fast, clean WordPress sites for small businesses and online experts.
                No templates. No bloat. Just a website that converts visitors into clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contact"
                  className="px-6 py-3 text-white font-medium rounded-lg transition-colors text-sm"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  Start a project
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                >
                  View my work →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex items-center gap-6"
              >
                <div>
                  <div className="text-2xl font-semibold text-gray-900">40+</div>
                  <div className="text-xs text-gray-400 mt-0.5">Projects delivered</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <div className="text-2xl font-semibold text-gray-900">6 yrs</div>
                  <div className="text-xs text-gray-400 mt-0.5">WordPress experience</div>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div>
                  <div className="text-2xl font-semibold text-gray-900">100%</div>
                  <div className="text-xs text-gray-400 mt-0.5">Client satisfaction</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Website mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <WebsiteMockup />
            </motion.div>
          </div>
        </div>

        <LogoCloud />
        <FeatureCardsSection />
        <AISection />
        <ProductDirectionSection />
        <WorkflowsSection />
        <CTASection />
        <Footer />
      </section>
    </>
  )
}
