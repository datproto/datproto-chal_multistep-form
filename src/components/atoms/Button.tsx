import React from 'react'

interface IButton {
  text?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

function Button({ text = 'button', type = 'button' }: IButton) {
  return (
    <button type={type}
            className="rounded bg-form-denim py-3 px-4 text-sm font-bold text-white lg:rounded-lg lg:px-6 lg:py-4 lg:text-base">
      {text}
    </button>
  )
}

export default Button
