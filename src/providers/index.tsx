'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import { AnimatePresence } from 'framer-motion'

import { BrowserRouter as Router } from 'react-router-dom'

export default function Providers({ children }: PropsWithChildren) {
  const [render, setRender] = useState(false)

  useEffect(() => setRender(true), [])

  return render ? (
    <Router>
      <Provider store={store}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </Provider>
    </Router>
  ) : null
}
