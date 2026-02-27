import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "var(--brand-blue)" }}>
            <Icon name="Globe" size={12} className="text-white" />
          </div>
          <span className="font-semibold text-gray-900 text-sm">Alex Nikitin</span>
          <span className="text-gray-300 text-sm mx-2">·</span>
          <span className="text-gray-400 text-sm">WordPress Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">About</a>
          <a href="#services" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Services</a>
          <a href="#process" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Process</a>
          <a href="#portfolio" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Portfolio</a>
          <a href="#contact" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Contact</a>
        </div>

        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} Alex Nikitin
        </p>
      </div>
    </footer>
  )
}
