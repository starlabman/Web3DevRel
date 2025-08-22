"use client"

import React, { ReactNode } from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { getTranslatedContent } from "@/lib/data"
import type { Language } from "@/lib/translations"

interface BentoCardProps {
  title: string | { [key in Language]: string }
  description?: string | { [key in Language]: string }
  href?: string
  icon?: ReactNode
  badges?: string[]
  className?: string
  children?: ReactNode
  size?: "sm" | "md" | "lg"
  engagement?: string
  currentLang: Language
}

export function BentoCard({
  title,
  description,
  href,
  icon,
  badges,
  className = "",
  children,
  size = "md",
  engagement,
  currentLang,
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 md:col-span-2 row-span-1",
    lg: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2",
  }

  const CardContent = (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full perspective-1000"
    >
      <Card className={`glass glass-hover h-full p-6 border-white/10 relative overflow-hidden group ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
            transform: "translateZ(0)",
          }}
          animate={{
            background: [
              "linear-gradient(0deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
              "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
              "linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
              "linear-gradient(270deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {icon && (
                <motion.div
                  className="p-2 rounded-lg bg-primary/20 text-primary"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              )}
              <motion.h3 className="font-semibold text-lg text-foreground" style={{ transform: "translateZ(20px)" }}>
                {getTranslatedContent(title, currentLang)}
              </motion.h3>
            </div>
            {href && (
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 45,
                  color: "rgb(139, 92, 246)",
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-60" />
              </motion.div>
            )}
          </div>

          {description && (
            <motion.p className="text-muted-foreground text-sm mb-4 flex-1" style={{ transform: "translateZ(10px)" }}>
              {getTranslatedContent(description, currentLang)}
            </motion.p>
          )}

          {children && (
            <motion.div className="flex-1 mb-4" style={{ transform: "translateZ(10px)" }}>
              {children}
            </motion.div>
          )}

          {engagement && (
            <motion.div className="mb-3" style={{ transform: "translateZ(15px)" }} whileHover={{ scale: 1.05 }}>
              <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                {engagement}
              </Badge>
            </motion.div>
          )}

          {badges && badges.length > 0 && (
            <motion.div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(15px)" }}>
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`block ${sizeClasses[size]}`}>
        {CardContent}
      </a>
    )
  }

  return <div className={sizeClasses[size]}>{CardContent}</div>
}
