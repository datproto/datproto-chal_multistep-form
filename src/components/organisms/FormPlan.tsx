'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import Form from '@/components/molecules/Form'

function FormPlan() {
  const [showForm, setShowForm] = React.useState(true)
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
  }

  const formInputs = [
    {
      label: 'name',
      content: {
        type: 'text',
        name: 'username',
        placeholder: 'e.g. Stephen King',
      },
    },
    {
      label: 'email address',
      content: {
        type: 'email',
        name: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
      },
    },
    {
      label: 'phone number',
      content: {
        type: 'phone',
        name: 'phone',
        placeholder: 'e.g. +1 234 567 890',
      },
    },
  ]

  return (
    <Form id="select-plan" title="Select your plan"
          description="You have the option of monthly or yearly billing."
          onSubmitHandler={onSubmitHandler}
    >
      <AnimatePresence>
        {showForm && (
          formInputs.map((input, index) => (
            <div key={index} className="flex gap-3 rounded-md border border-form-gray-light p-4">
              <Image src={ArcadeIcon} alt="Arcade Icon" width={40} height={40}/>
              <div className="flex flex-col justify-between">
                <h2 className="font-form text-base font-medium capitalize text-form-denim">arcade</h2>
                <p className="font-form text-[14px] text-form-gray-normal">$9/mo</p>
              </div>
            </div>
          ))
        )}
      </AnimatePresence>
    </Form>
  )
}

export default FormPlan
