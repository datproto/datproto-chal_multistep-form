'use client'

import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Route, Routes, useLocation } from 'react-router-dom'

import ThankYou from '@/assets/images/icon-thank-you.svg'
import Button from '@/components/atoms/Button'
import Main from '@/components/atoms/Main'
import FormAddons from '@/components/organisms/FormAddons'
import FormFinish from '@/components/organisms/FormFinish'
import FormInfo from '@/components/organisms/FormInfo'
import FormPlan from '@/components/organisms/FormPlan'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  const finish = useSelector((state: any) => state.form.finish)

  const goBackHandler = (e: React.MouseEvent<HTMLButtonElement>, previous: any) => {
    e.preventDefault()
    navigate(previous)
  }

  const previousPage = [
    { path: '/', previous: '/' },
    { path: 'plans', previous: '/' },
    { path: 'addons', previous: 'plans' },
    { path: 'finish', previous: 'addons' },
  ]

  return (
    <Main>
      {finish ? (
        <div className="flex grow flex-col px-4 py-[2rem] lg:justify-center">
          <div
            className="flex flex-col items-center justify-center gap-6 rounded-md bg-white px-12 py-[2rem] shadow-md lg:gap-8 lg:px-6 lg:shadow-none ">
            <div className="relative h-14 w-14 lg:h-20 lg:w-20">
              <Image src={ThankYou} alt="thank-you-icon" fill/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-2xl font-bold lg:text-3xl">Thank you!</h1>
              <span className="text-center text-form-gray-normal">
              Thanks for confirming your subscription! We hope you have fun using our platform.
              If you ever need support, please feel free to email us at support@loremgaming.com.
            </span>
            </div>
          </div>
        </div>
      ) : (
        <div id="form" className="flex grow flex-col justify-between">
          <div id="form-content" className="flex flex-col gap-[2rem] bg-none px-4 py-[2rem]">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<FormInfo/>}/>
              <Route path="/plans" element={<FormPlan/>}/>
              <Route path="/addons" element={<FormAddons/>}/>
              <Route path="/finish" element={<FormFinish/>}/>
            </Routes>
          </div>

          <div id="form-footer" className="flex justify-between bg-white p-4">
            <Button onClick={
              (e) => {
                const checkPrevious = previousPage.find(
                  (page) => page.path === location.pathname.substring(1),
                )
                if (!checkPrevious) return
                goBackHandler(e, checkPrevious.previous)
              }
            } text="go back" background={false}
                    customClass="hover:text-form-denim active:text-form-denim transition-all"
            />
            {location.pathname === '/finish' ? (
              <Button text="confirm" type="submit" formId="finish"
                      customClass="bg-form-purple hover:bg-[#928CFF] active:bg-[#928CFF] transition-all"/>
            ) : (
              <Button text="next step" type="submit"
                      formId={location.pathname === '/' ? 'info' : location.pathname.substring(1)}
                      customClass="hover:bg-[#164A8A] active:bg-[#164A8A] transition-all"/>
            )}
          </div>
        </div>
      )}
    </Main>
  )
}
