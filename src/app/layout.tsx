import '@/styles/globals.css'
import React from 'react'
import Image from 'next/image'

import mobileBg from '@/assets/images/bg-sidebar-mobile.svg'

export const metadata = {
  title: 'Frontend Mentor | Multi-step form',
  description: 'Multi-step form challenge from Frontend Mentor. Coded by @datproto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="relative">
    <div className="absolute top-0 -z-50 w-full lg:hidden">
      <Image src={mobileBg} alt="background" height={175} width={372} className="w-full object-cover object-center"/>
    </div>
    {children}
    </body>
    </html>
  )
}
