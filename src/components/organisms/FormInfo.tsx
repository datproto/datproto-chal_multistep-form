'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import Input from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { addFormUser } from '@/reducers/formReducer'

function FormInfo() {
  const navigate = useNavigate()

  const [showForm, setShowForm] = React.useState(true)

  const dispatch = useDispatch()
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    const name = e.currentTarget.username.value
    const email = e.currentTarget.email.value
    const phone = e.currentTarget.phone.value
    dispatch(addFormUser({ name, email, phone }))
    setShowForm(false)
    await navigate('/plans')
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
    <Form id="info" title="Personal info"
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
