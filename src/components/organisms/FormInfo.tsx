'use client'

import React from 'react'
import Form from '@/components/molecules/Form'
import Input from '@/components/atoms/Input'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router'

function FormInfo() {
  const navigate = useNavigate()

  const [showForm, setShowForm] = React.useState(true)
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    navigate('/plans')
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
