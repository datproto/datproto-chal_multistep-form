import { motion } from 'framer-motion'
import React from 'react'

import Navbar from '@/components/organisms/Navbar'

interface IMain {
  children?: React.ReactNode
}

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

function Main({ children }: IMain) {
  return (
    <motion.main
      variants={mainVariants}
      initial="hidden"
      animate="show"
      className="flex h-full w-full flex-col justify-between pt-[2rem] lg:max-h-[80%] lg:min-h-[66.6%] lg:max-w-4xl lg:flex-row lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-2xl xl:h-5/6 2xl:h-2/3">

      <Navbar/>
      {children}
    </motion.main>
  )
}

export default Main
