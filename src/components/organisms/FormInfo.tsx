'use client'

import React from 'react'
import Form from '@/components/molecules/Form'
import Input from '@/components/atoms/Input'
import { AnimatePresence } from 'framer-motion'

function FormInfo() {
  const [showForm, setShowForm] = React.useState(true)
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Name: ', (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value)
    console.log('Email: ', (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value)
    console.log('Phone: ', (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value)
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
    <Form id="select-plan" title="Personal info"
          description="Please provide your name, email address, and phone number."
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

export default FormInfo
