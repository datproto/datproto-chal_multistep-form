'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import ProIcon from '@/assets/images/icon-pro.svg'
import { RadioInput } from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { choosePlan } from '@/reducers/formReducer'

function FormPlan() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showForm, setShowForm] = React.useState(true)

  // Checking Form state

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const valueArray = e.currentTarget.value.split('-')
    const name = valueArray[0]
    const type = valueArray[1]
    const price = +valueArray[2]
    dispatch(choosePlan(
      {
        plan:
          {
            name,
            type,
            price,
          },
      },
    ))
  }
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    navigate('/addons')
  }

  const formInputs = [
    {
      icon: ArcadeIcon,
      content: {
        name: 'arcade',
        type: 'monthly',
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
        name: 'advanced',
        type: 'monthly',
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
        name: 'pro',
        type: 'monthly',
        price: {
          month: 15,
          year: 150,
        },
        currency: 'USD',
      },
    },
  ]

  return (
    <Form id="plans" title="Select your plan"
          description="You have the option of monthly or yearly billing."
          onSubmitHandler={onSubmitHandler}
    >
      <AnimatePresence>
        {showForm && (
          formInputs.map((input, index) => (
            <div key={index} className="relative">
              <RadioInput
                content={{
                  name: 'plan-choose',
                  value: `${input.content.name}-${input.content.type}-${input.content.price.month}`,
                }}
                radio={{ order: index }}
                onClick={handleInputClick}
              >
                <Image src={input.icon} alt={'radio-icon'} height={40} width={40}/>
                <div className="flex flex-col justify-between">
                  <h2 className="font-form text-base font-medium capitalize text-form-denim">{input.content.name}</h2>
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
