import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: "var(--brand-blue)" }}>
            <Icon name="Globe" size={14} className="text-white" />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Alex Nikitin</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Process
          </a>
          <a href="#portfolio" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Portfolio
          </a>
        </div>

        <a
          href="#contact"
          className="text-sm font-medium text-white px-4 py-2 rounded-md transition-colors"
          style={{ backgroundColor: "var(--brand-blue)" }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
