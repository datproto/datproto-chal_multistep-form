import { motion, Variants } from 'framer-motion'
import React from 'react'

interface IInput {
  label?: string
  content: {
    type?: string
    name?: string
    placeholder?: string
    value?: string
  }
  radio?: {
    order?: number
  }
  customAnimation?: number
  children?: React.ReactNode
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

function RadioInput({ content, radio, children }: IInput) {
  return (
    <motion.div
      key={content.name}
      variants={inputVariants}
      className="relative">
      <input className="peer sr-only"
             type="radio"
             value={content && content.value}
             name={content && content.name}
             id={`radio-${content.name}-${radio?.order}`}/>
      <label
        className="flex cursor-pointer gap-3 rounded-md border border-form-gray-light p-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:bg-form-gray-lightest peer-checked:ring-2 peer-checked:ring-form-purple"
        htmlFor={`radio-${content.name}-${radio?.order}`}>
        {children}
      </label>

      <div className="absolute top-5 right-3 hidden h-5 w-5 peer-checked:block"/>
    </motion.div>
  )
}

// UPDATE: Use the below link for reference
// https://flowbite.com/docs/forms/radio/#advanced-layout

export default Input
export { RadioInput }
