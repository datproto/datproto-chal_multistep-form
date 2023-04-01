'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import Input from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { addFormUser } from '@/reducers/formReducer'

function FormInfo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const infos = useSelector((state: any) => state.form.user)

  const [showForm, setShowForm] = React.useState(true)

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
        value: infos.name,
      },
    },
    {
      label: 'email address',
      content: {
        type: 'email',
        name: 'email',
        placeholder: 'e.g. stephenking@lorem.com',
        value: infos.email,
      },
    },
    {
      label: 'phone number',
      content: {
        type: 'phone',
        name: 'phone',
        placeholder: 'e.g. +1 234 567 890',
        value: infos.phone,
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
