import { motion } from "framer-motion"

const clients = [
  { name: "Studio Noir" },
  { name: "Bloom Agency" },
  { name: "Petal & Co." },
  { name: "Horizon Labs" },
  { name: "Craft & Scale" },
  { name: "Luminary" },
  { name: "Basepoint" },
  { name: "Nordic Ways" },
]

export function LogoCloud() {
  return (
    <div className="bg-gray-50 border-t border-b border-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-gray-400 text-center mb-10"
        >
          Trusted by small businesses and online experts worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-center text-sm font-medium text-gray-300 hover:text-gray-500 transition-colors"
            >
              {client.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
