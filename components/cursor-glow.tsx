"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="absolute rounded-full"
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(97, 0, 255, 0.06) 0%, rgba(97, 0, 255, 0.02) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        className="absolute rounded-full"
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.3,
        }}
        style={{
          width: "300px",
          height: "300px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(97, 0, 255, 0.05) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  )
}
