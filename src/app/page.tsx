'use client'

import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Button from '@/components/atoms/Button'
import Main from '@/components/atoms/Main'
import FormInfo from '@/components/organisms/FormInfo'
import FormPlan from '@/components/organisms/FormPlan'

export default function Home() {
  const location = useLocation()

  return (
    <Main>
      <div id="form" className="flex grow flex-col justify-between">
        <div id="form-content" className="flex flex-col gap-[2rem] bg-none px-4 py-[2rem]">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<FormInfo/>}/>
            <Route path="/plans" element={<FormPlan/>}/>
          </Routes>
        </div>

        <div id="form-footer" className="flex justify-between bg-white p-4">
          <Button text="go back" background={false}/>
          <Button text="next step" type="submit"
                  formId={location.pathname === '/' ? 'info' : location.pathname.substring(1)}/>
        </div>
      </div>
    </Main>
  )
}
