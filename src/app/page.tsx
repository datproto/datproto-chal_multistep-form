'use client'

import Button from '@/components/atoms/Button'
import React from 'react'
import FormInfo from '@/components/organisms/FormInfo'
import Main from '@/components/atoms/Main'

import { Route, Routes } from 'react-router-dom'
import FormPlan from '@/components/organisms/FormPlan'

export default function Home() {
  return (
    <Main>
      <div id="form" className="flex grow flex-col justify-between">
        <div id="form-content" className="flex flex-col gap-[2rem] bg-none px-4 py-[2rem]">
          <Routes>
            <Route path="/" element={<FormInfo/>}/>
            <Route path="/plans" element={<FormPlan/>}/>
          </Routes>
        </div>

        <div id="form-footer" className="flex justify-between bg-white p-4">
          <Button text="go back" background={false}/>
          <Button text="next step" type="submit" formId="select-plan"/>
        </div>
      </div>
    </Main>
  )
}
