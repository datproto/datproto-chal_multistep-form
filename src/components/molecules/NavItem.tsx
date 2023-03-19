import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface INavItem {
  step: number
  title: string
  destination: string
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

function NavItem({ step, title, destination }: INavItem) {
  return (
    <motion.li
      variants={NavItemVariants}
    >
      <NavLink
        to={destination}
        className="flex lg:gap-4"
      >
        {({ isActive }) => (
          <>
            <div
              className={`relative rounded-full ${isActive ? 'border border-form-blue-sky bg-form-blue-sky p-5' : 'border border-white bg-transparent p-5'}`}>
                <span
                  className={`absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold ${isActive ? 'text-form-denim' : 'text-white'}`}>
                  {step}
                </span>
            </div>
            <div className="hidden flex-col gap-1 lg:flex">
              <span className="body_small text-form-blue-light">Step {step}</span>
              <span className="body_medium font-bold uppercase tracking-[1px] text-white">{title}</span>
            </div>
          </>
        )}
      </NavLink>
    </motion.li>
  )
}

export default NavItem
