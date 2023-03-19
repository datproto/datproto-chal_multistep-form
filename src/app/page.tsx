'use client'

import Button from '@/components/atoms/Button'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import FormInfo from '@/components/organisms/FormInfo'

import { motion } from 'framer-motion'

const mainVariants = {
  show: {
    opacity: 1,
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      duration: 1,
      type: 'spring',
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
}

export default function Home() {
  return (
    <motion.main
      variants={mainVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex h-full w-full flex-col justify-between pt-[2rem] lg:h-auto lg:max-w-4xl lg:flex-row lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-2xl">

      <Navbar/>
      <div id="form" className="flex grow flex-col justify-between">
        <div id="form-content" className="flex flex-col gap-[2rem] bg-none px-4 py-[2rem]">
          <FormInfo/>
        </div>

        <div id="form-footer" className="flex justify-between bg-white p-4">
          <Button text="go back" background={false}/>
          <Button text="next step" type="submit" formId="select-plan"/>
        </div>
      </div>
    </motion.main>
  )
}
