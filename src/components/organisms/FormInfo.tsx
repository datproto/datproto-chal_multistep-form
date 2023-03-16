'use client'

import React from 'react'
import Form from '@/components/molecules/Form'
import Input from '@/components/atoms/Input'

function FormInfo() {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log((e.currentTarget.elements.namedItem('username') as HTMLInputElement).value)
  }
  return (
    <Form id="select-plan" title="Personal info"
          description="Please provide your name, email address, and phone number."
          onSubmitHandler={onSubmitHandler}>
      <Input
        label="name"
        content={{
          type: 'text',
          name: 'username',
          placeholder: 'e.g. Stephen King',
        }}/>
      <Input
        label="email address"
        content={{
          type: 'email',
          name: 'email',
          placeholder: 'e.g. stephenking@lorem.com',
        }}/>
      <Input
        label="phone number"
        content={{
          type: 'phone',
          name: 'phone',
          placeholder: 'e.g. +1 234 567 890',
        }}/>
    </Form>
  )
}

export default FormInfo
