import React from 'react'

interface IButton {
  text?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  background?: boolean
  customClass?: string
}

function Button({
  text = 'button', type = 'button', background = true, customClass = ' ',
}: IButton) {
  return (
    <button type={type}
            className={`rounded ${background ? 'bg-form-denim text-white' : 'bg-transparent text-form-gray-normal'} py-3 px-4 text-sm font-bold capitalize lg:rounded-lg lg:px-6 lg:py-4 lg:text-base ${customClass && customClass}`}>
      {text}
    </button>
  )
}

export default Button
