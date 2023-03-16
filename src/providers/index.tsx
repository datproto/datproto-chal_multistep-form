'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import { AnimatePresence } from 'framer-motion'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </Provider>
  )
}
