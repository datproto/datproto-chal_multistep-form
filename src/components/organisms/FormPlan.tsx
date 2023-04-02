'use client'

import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import ProIcon from '@/assets/images/icon-pro.svg'
import { RadioInput } from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { formInputs as addonsInput } from '@/components/organisms/FormAddons'
import {
  chooseAddOns, choosePlan, choosePlanType, removeAddOns,
} from '@/reducers/formReducer'

function FormPlan() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const plan = useSelector((state: any) => state.form.plan)
  const addons = useSelector((state: any) => state.form.plan.addOns)

  const [showForm, setShowForm] = React.useState(true)

  // Checking Form state
  const formInputs = [
    {
      icon: ArcadeIcon,
      content: {
        name: 'arcade',
        price: {
          mo: 9,
          yr: 90,
        },
        currency: 'USD',
      },
    },
    {
      icon: AdvancedIcon,
      content: {
        name: 'advanced',
        price: {
          mo: 12,
          yr: 120,
        },
        currency: 'USD',
      },
    },
    {
      icon: ProIcon,
      content: {
        name: 'pro',
        price: {
          mo: 15,
          yr: 150,
        },
        currency: 'USD',
      },
    },
  ]

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const valueArray = e.currentTarget.value.split('-')
    const name = valueArray[0]
    const price = +valueArray[1]
    dispatch(choosePlan(
      {
        plan:
          {
            name,
            price,
          },
      },
    ))
  }

  const handlerChangePlan = (type: string) => {
    dispatch(choosePlanType({ planType: type }))
    dispatch(choosePlan({
      plan: {
        name: plan.name,
        price: formInputs.filter(
          (input) => input.content.name === plan.name,
        ).map((input) => input.content.price[type === 'mo' ? 'mo' : 'yr'])[0],
      },
    }))

    if (addons.length > 0) {
      const newAddonsPrice = addons.map((addon: any) => ({
        ...addon,
        price: addonsInput.filter(
          (input) => input.content.name === addon.name,
        ).map((input) => input.content.price[type === 'mo' ? 'mo' : 'yr'])[0],
      }))
      newAddonsPrice.map((addon: any) => {
        dispatch(removeAddOns({ addOns: addon }))
        dispatch(chooseAddOns({ addOns: addon }))

        return null
      })
    }
  }
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    navigate('/addons')
  }

  return (
    <Form id="plans" title="Select your plan"
          description="You have the option of monthly or yearly billing."
          onSubmitHandler={onSubmitHandler}
    >
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        {showForm && (
          formInputs.map((input, index) => {
            const checkedStatus = plan.name === input.content.name
            const planType = plan.type === 'mo' ? 'mo' : 'yr'
            return (
              <RadioInput
                key={index}
                content={{
                  name: `plan-choose-${index}`,
                  value: `${input.content.name}-${input.content.price[planType]}`,
                }}
                radio={{ order: index }}
                onClick={handleInputClick}
                checked={checkedStatus}
              >
                <Image src={input.icon} alt={'radio-icon'} height={40} width={40}/>
                <div className="flex flex-col justify-between">
                  <h2
                    className="font-form text-base font-medium capitalize text-form-denim">{input.content.name}</h2>
                  <p
                    className="font-form text-[14px] text-form-gray-normal">${input.content.price[planType]}/{planType}</p>
                </div>
              </RadioInput>
            )
          })
        )}
      </div>
      <div className="flex w-full items-center justify-center gap-6 rounded-lg bg-form-gray-lightest py-3">
        <div>
          <p
            className={`body_medium font-medium${plan.type === 'mo' ? ' text-form-denim' : ' text-form-gray-normal'}`}>Monthly</p>
        </div>
        <div
          className={`flex h-6 w-12 items-center ${plan.type === 'mo' ? 'justify-start' : 'justify-end'} rounded-full bg-form-denim p-1 transition-all`}
          onClick={() => handlerChangePlan(plan.type === 'mo' ? 'yr' : 'mo')}
        >
          <div className="rounded-full bg-white p-2"></div>
        </div>
        <div>
          <p
            className={`body_medium font-medium${plan.type === 'yr' ? ' text-form-denim' : ' text-form-gray-normal'}`}>Yearly</p>
        </div>
      </div>
    </Form>
  )
}

export default FormPlan
