import React from 'react'

import { motion } from 'framer-motion'

interface IForm {
  id?: string
  title: string
  description: string
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>
  children?: React.ReactNode
}

function Form({
  id, title, description, onSubmitHandler, children,
}: IForm) {
  return (
    <motion.form
      initial={{ x: -10000 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ duration: 0.15, origin: 1 }}
      id={id}
      onSubmit={onSubmitHandler}
      className="grow rounded-md bg-white py-[2rem] px-6 shadow-2xl lg:bg-none lg:pl-4 lg:pr-0">
      <h1>{title}</h1>

      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <p className="body_large mt-3 mb-5">
        {description}
      </p>

      {/* Input */}
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </motion.form>
  )
}

export default Form
