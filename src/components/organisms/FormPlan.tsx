'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import ProIcon from '@/assets/images/icon-pro.svg'
import { RadioInput } from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'

function FormPlan() {
  const [showForm, setShowForm] = React.useState(true)
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
  }

  const formInputs = [
    {
      icon: ArcadeIcon,
      content: {
        type: 'arcade',
        price: {
          month: 9,
          year: 90,
        },
        currency: 'USD',
      },
    },
    {
      icon: AdvancedIcon,
      content: {
        type: 'advanced',
        price: {
          month: 12,
          year: 120,
        },
        currency: 'USD',
      },
    },
    {
      icon: ProIcon,
      content: {
        type: 'pro',
        price: {
          month: 15,
          year: 150,
        },
        currency: 'USD',
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
            <div key={index} className="relative">
              <RadioInput
                content={{ name: 'plan-choose', value: `radio-${index}` }}
                radio={{ order: index }}
              >
                <Image src={input.icon} alt={'radio-icon'} height={40} width={40}/>
                <div className="flex flex-col justify-between">
                  <h2 className="font-form text-base font-medium capitalize text-form-denim">{input.content.type}</h2>
                  <p className="font-form text-[14px] text-form-gray-normal">${input.content.price.month}/mo</p>
                </div>
              </RadioInput>
            </div>
          ))
        )}
      </AnimatePresence>
    </Form>
  )
}

export default FormPlan
