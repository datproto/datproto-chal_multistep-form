import React from 'react'
import { motion, Variants } from 'framer-motion'

interface IInput {
  label?: string
  content: {
    type?: string
    name?: string
    placeholder?: string
  }
  customAnimation?: number
}

const inputVariants: Variants = {
  show: {
    opacity: 1,
    y: 0,
    transition:
      {
        duration: 0.5,
        ease: 'easeInOut',
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 20,
        },
      },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
}

function Input({
  label,
  content = { type: 'text', name: 'name', placeholder: 'write something ...' },
  customAnimation,
}: IInput) {
  return (
    <motion.div
      key={content.name}
      variants={inputVariants}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, delay: customAnimation && customAnimation * 0.2 },
      }}
      className="flex flex-col gap-1">
      {label && <label htmlFor={content.name} className="text-sm capitalize text-form-denim">{label}</label>}
      <input type={content.type} name={content.name} placeholder={content.placeholder}
             className="rounded border border-form-gray-light px-4 py-3 font-form font-medium text-form-gray-normal"/>
    </motion.div>
  )
}

export default Input
