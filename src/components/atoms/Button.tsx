import React from 'react'

interface IButton {
  text?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  background?: boolean
  customClass?: string
  formId?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({
  text = 'button', type = 'button', background = true, formId, customClass = ' ', onClick,
}: IButton) {
  // @ts-ignore
  const buttonClassStyle = `rounded ${background ? 'bg-form-denim text-white' : 'bg-transparent text-form-gray-normal'} py-3 px-4 text-sm font-bold capitalize lg:rounded-lg lg:px-6 lg:py-4 lg:text-base ${customClass && customClass}`

  if (formId && type === 'submit') {
    return (
      <button type={type}
              form={formId}
              className={buttonClassStyle}
              onClick={onClick}
      >
        {text}
      </button>
    )
  }
  return (
    <button type={type}
            className={buttonClassStyle}>
      {text}
    </button>
  )
}

export default Button
