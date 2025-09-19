"use client"

import { motion } from "framer-motion"
import { Check, Star, Calendar, Users, Code, Briefcase, BookOpen, TrendingUp } from "lucide-react"
import { mentorshipServices } from "@/lib/data"
import { translations, type Language } from "@/lib/translations"
import { getTranslatedContent } from "@/lib/data"

const iconMap = {
  "Quick Web3 Consultation": Calendar,
  "Blockchain Fundamentals": BookOpen,
  "Investment Guidance & Portfolio Management": TrendingUp,
  "Technical Web3 Development": Code,
  "Web3 Business Strategy": Briefcase,
  "Corporate Blockchain Training": Users,
}

interface MentorshipSectionProps {
  currentLang: Language
}

export function MentorshipSection({ currentLang }: MentorshipSectionProps) {
  const t = translations[currentLang]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            {t.mentorship.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.mentorship.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mentorshipServices.map((service, index) => {
            const Icon = iconMap[service.title.en as keyof typeof iconMap]

            return (
              <motion.div
                key={getTranslatedContent(service.title, currentLang)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${service.popular ? "md:-mt-8" : ""}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {t.mentorship.mostPopular}
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 ${service.popular ? "border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-black/40" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{getTranslatedContent(service.title, currentLang)}</h3>
                      <p className="text-purple-400 text-sm">{service.duration}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{getTranslatedContent(service.description, currentLang)}</p>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {getTranslatedContent(feature, currentLang)}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      service.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                    {t.buttons.bookSession}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">{t.mentorship.notSure}</p>
          <motion.a
            href="https://calendly.com/starlabman/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            {t.mentorship.freeDiscovery}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
