'use client'

import { motion } from 'framer-motion'
import React from 'react'

import SidebarBG from '@/assets/images/bg-sidebar-desktop.svg'
import NavItem from '@/components/molecules/NavItem'
import useMediaQuery from '@/utils/hooks/MediaQuery'

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
        <NavItem step={1} title="your info" destination="/"/>
        <NavItem step={2} title="select your plans" destination="/plans"/>
      </motion.ul>
    </motion.div>
  )
}

export default Navbar
