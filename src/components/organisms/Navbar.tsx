'use client'

import React from 'react'
import useMediaQuery from '@/utils/hooks/MediaQuery'

import SidebarBG from '@/assets/images/bg-sidebar-desktop.svg'

import { motion } from 'framer-motion'

const NavVariants = {
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      when: 'beforeChildren',
      delay: 0.25,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
}

const NavListVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      delay: 0,
      default: {
        duration: 0.5,
        ease: 'easeInOut',
      },
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

const NavItemVariants = {
  show: {
    opacity: 1,
    x: 0,
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
    x: -20,
  },
}

function Navbar() {
  const largeScreen = useMediaQuery('(min-width: 1024px)')
  return (
    <motion.div
      variants={NavVariants}
      initial="hidden"
      animate="show"
      className="lg:rounded-2xl lg:px-[2rem] lg:py-10 lg:pr-20"
      style={{
        backgroundImage: `url(${largeScreen ? SidebarBG.src : ''})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <motion.ul
        variants={NavListVariants}
        className="flex items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-[2rem]">
        <motion.li
          variants={NavItemVariants}
          className="flex lg:gap-4">
          <div className="relative rounded-full bg-form-blue-sky p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-form-denim">1</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 1</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">your info</span>
          </div>
        </motion.li>
        <motion.li
          variants={NavItemVariants}
          className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">2</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 2</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">select plan</span>
          </div>
        </motion.li>
        <motion.li
          variants={NavItemVariants}
          className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">3</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 3</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">add-ons</span>
          </div>
        </motion.li>
        <motion.li
          variants={NavItemVariants}
          className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">4</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 4</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">summary</span>
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

export default Navbar
