'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function AnimatedContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </motion.main>
  )
}
