'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Form from '@/components/molecules/Form'
import { finishForm } from '@/reducers/formReducer'

function FormFinish() {
  const dispatch = useDispatch()

  const [showForm, setShowForm] = React.useState(true)

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    dispatch(
      finishForm(true),
    )
  }

  // Get data from store
  const plan = useSelector((state: any) => state.form.plan)
  const addons = useSelector((state: any) => state.form.plan.addOns)

  const totalPrice = addons.reduce(
    (acc: number, item: any) => acc + item.price, // acc + item.price,
    plan.price,
  )

  return (
    <Form id="finish" title="Finishing up"
          description="Double-check everything looks OK before confirming."
          onSubmitHandler={onSubmitHandler}
    >
      {showForm && (
        <>
          <div className="divide-y rounded-xl bg-form-gray-lightest p-4">
            <div id="header" className="flex items-center justify-between pb-3">
              <div className="flex flex-col gap-1">
                <p
                  className="body_medium !font-medium capitalize text-form-denim lg:!text-base">{plan.name} ({plan.type === 'mo' ? 'monthly' : 'yearly'})</p>
                <NavLink to="/plans"
                         className="body_medium text-form-gray-normal underline hover:text-form-purple">Change</NavLink>
              </div>
              <div className="body_medium !font-bold text-form-denim">
                ${plan.price}{plan.type === 'mo' ? '/mo' : '/yr'}
              </div>
            </div>

            <div id="body" className="flex flex-col gap-3 pt-3">
              {addons.map((item: any, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="body_medium capitalize text-form-gray-normal">{item.name}</p>
                  <p className="body_medium text-form-denim">+${item.price}/{plan.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="total" className="px-4">
            <div className="flex items-center justify-between pt-3">
              <p
                className="body_medium !font-medium capitalize text-form-gray-normal">Total
                                                                                      (per {plan.type === 'mo' ? 'month' : 'year'})</p>
              <p className="body_large !font-bold !text-form-purple">
                ${totalPrice}{plan.type === 'mo' ? '/mo' : '/yr'}
              </p>
            </div>
          </div>
        </>
      )}
    </Form>
  )
}

export default FormFinish
