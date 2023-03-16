'use client'

import React from 'react'
import useMediaQuery from '@/utils/hooks/MediaQuery'

import SidebarBG from '@/assets/images/bg-sidebar-desktop.svg'

function Navbar() {
  const largeScreen = useMediaQuery('(min-width: 1024px)')
  return (
    <div className="lg:rounded-2xl lg:px-[2rem] lg:py-10 lg:pr-20" style={{
      backgroundImage: `url(${largeScreen ? SidebarBG.src : ''})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <ul className="flex items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-[2rem]">
        <li className="flex lg:gap-4">
          <div className="relative rounded-full bg-form-blue-sky p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-form-denim">1</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 1</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">your info</span>
          </div>
        </li>
        <li className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">2</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 2</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">select plan</span>
          </div>
        </li>
        <li className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">3</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 3</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">add-ons</span>
          </div>
        </li>
        <li className="flex lg:gap-4">
          <div className="relative rounded-full border border-white bg-transparent p-5">
                <span
                  className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-sm font-bold text-white">4</span>
          </div>
          <div className="hidden flex-col gap-1 lg:flex">
            <span className="body_small text-form-blue-light">Step 4</span>
            <span className="body_medium font-bold uppercase tracking-[1px] text-white">summary</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
