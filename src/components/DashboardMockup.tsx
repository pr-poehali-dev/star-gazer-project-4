export function WebsiteMockup() {
  return (
    <div className="relative">
      {/* Browser chrome */}
      <div
        className="rounded-2xl overflow-hidden border border-gray-200"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)" }}
      >
        {/* Browser bar */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center gap-2 mx-4">
            <div className="w-3 h-3 rounded-full border border-gray-300" />
            <span className="text-xs text-gray-400">yourwebsite.com</span>
          </div>
        </div>

        {/* Website content mockup */}
        <div className="bg-white">
          {/* Nav */}
          <div className="px-6 py-3 flex items-center justify-between border-b border-gray-100">
            <div className="w-20 h-2.5 rounded bg-gray-900" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-2 rounded bg-gray-200" />
              <div className="w-10 h-2 rounded bg-gray-200" />
              <div className="w-14 h-6 rounded-md" style={{ backgroundColor: "var(--brand-blue)" }} />
            </div>
          </div>

          {/* Hero section */}
          <div className="px-6 py-8 bg-white">
            <div className="w-16 h-1.5 rounded bg-gray-200 mb-3" />
            <div className="w-56 h-5 rounded bg-gray-900 mb-2" />
            <div className="w-44 h-5 rounded bg-gray-900 mb-4" />
            <div className="w-64 h-3 rounded bg-gray-200 mb-2" />
            <div className="w-48 h-3 rounded bg-gray-200 mb-6" />
            <div className="flex gap-3">
              <div className="w-24 h-8 rounded-lg" style={{ backgroundColor: "var(--brand-blue)" }} />
              <div className="w-24 h-8 rounded-lg border border-gray-200 bg-white" />
            </div>
          </div>

          {/* Features row */}
          <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="w-6 h-6 rounded-md mb-3" style={{ backgroundColor: "rgba(30,58,110,0.1)" }} />
                  <div className="w-16 h-2.5 rounded bg-gray-800 mb-2" />
                  <div className="w-full h-2 rounded bg-gray-200 mb-1" />
                  <div className="w-3/4 h-2 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="px-6 py-4 bg-white border-t border-gray-100 flex items-center justify-between">
            {[["Page Speed", "98"], ["SEO Score", "100"], ["Mobile", "100"]].map(([label, val]) => (
              <div key={label} className="text-center">
                <div className="text-xs font-semibold text-gray-900">{val}</div>
                <div className="text-[10px] text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 border border-gray-200 shadow-lg flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(30,58,110,0.1)" }}>
          <span className="text-sm">✓</span>
        </div>
        <div>
          <div className="text-xs font-medium text-gray-900">Project delivered</div>
          <div className="text-[11px] text-gray-400">On time & on budget</div>
        </div>
      </div>
    </div>
  )
}

export function DashboardMockup() {
  return <WebsiteMockup />
}
