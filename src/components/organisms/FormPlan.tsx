'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import ProIcon from '@/assets/images/icon-pro.svg'
import { RadioInput } from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { choosePlan } from '@/reducers/formReducer'

function FormPlan() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const plan = useSelector((state: any) => state.form.plan)

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

  // const handlerChangePlan = () => {
  //   dispatch(choosePlan(
  //     {
  //       plan: {
  //         type: 'yr',
  //       },
  //     },
  //   ))
  // }
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
        type: 'mo',
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
        type: 'mo',
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
        type: 'mo',
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
                checked={plan.name === input.content.name}
              >
                <Image src={input.icon} alt={'radio-icon'} height={40} width={40}/>
                <div className="flex flex-col justify-between">
                  <h2
                    className="font-form text-base font-medium capitalize text-form-denim">{index}. {input.content.name}</h2>
                  <p className="font-form text-[14px] text-form-gray-normal">${input.content.price.month}/mo</p>
                </div>
              </RadioInput>
            </div>
          ))
        )}
      </AnimatePresence>

      <div className="flex w-full items-center justify-center gap-6 rounded-lg bg-form-gray-lightest py-3">
        <div>
          <p className="body_medium font-medium text-form-denim">Monthly</p>
        </div>
        <div
          className={`flex h-6 w-12 items-center ${plan.type === 'mo' ? 'justify-start' : 'justify-end'} rounded-full bg-form-denim p-1 transition-all`}
          // onClick={() => handlerChangePlan()}
        >
          <div className="rounded-full bg-white p-2"></div>
        </div>
        <div>
          <p className="body_medium font-medium text-form-gray-normal">Yearly</p>
        </div>
      </div>
    </Form>
  )
}

export default FormPlan
