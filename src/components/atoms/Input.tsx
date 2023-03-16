import React from 'react'

interface IInput {
  label?: string
  content: {
    type?: string
    name?: string
    placeholder?: string
  }
}

function Input({ label, content = { type: 'text', name: 'name', placeholder: 'write something ...' } }: IInput) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={content.name} className="text-sm capitalize text-form-denim">{label}</label>}
      <input type={content.type} name={content.name} placeholder={content.placeholder}
             className="rounded border border-form-gray-light px-4 py-3 font-form font-medium text-form-gray-normal"/>
    </div>
  )
}

export default Input
