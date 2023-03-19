'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'

import Input from '@/components/atoms/Input'
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
            <Input
              key={index}
              customAnimation={index}
              label={input.label}
              content={input.content}
            />
          ))
        )}
      </AnimatePresence>
    </Form>
  )
}

export default FormPlan
