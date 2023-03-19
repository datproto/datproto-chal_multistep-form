import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

interface IForm {
  id?: string
  title: string
  description: string
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>
  children?: React.ReactNode
}

const formVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: 'afterChildren',
    },
  },
}

const formChildVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: 'afterChildren',
    },
  },
}

function Form({
  id, title, description, onSubmitHandler, children,
}: IForm) {
  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      id={id}
      onSubmit={onSubmitHandler}
      className="grow rounded-md bg-white py-[2rem] px-6 shadow-2xl lg:bg-none lg:pl-4 lg:shadow-none">
      <motion.h1>
        {title}
      </motion.h1>

      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <p className="body_large mt-3 mb-5">
        {description}
      </p>

      {/* Input */}
      <motion.div
        className="flex flex-col gap-4"
        variants={formChildVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </motion.div>
    </motion.form>
  )
}

export default Form
