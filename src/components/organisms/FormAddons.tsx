import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { SelectInput } from '@/components/atoms/Input'
import Form from '@/components/molecules/Form'
import { chooseAddOns, removeAddOns } from '@/reducers/formReducer'

function FormAddons() {
  const navigate = useNavigate()

  const addons = useSelector((state: any) => state.form.plan.addOns)
  const dispatch = useDispatch()

  const [showForm, setShowForm] = React.useState(true)

  // Handle Form and Input events
  const [checked, setChecked] = React.useState(
    [false, false, false],
  )
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowForm(false)
    navigate('/')
  }
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const updatedCheckedState = checked.map((item, index) => (index === position ? !item : item))
    setChecked(updatedCheckedState)

    if (updatedCheckedState[position]) {
      const valueArray = e.currentTarget
      // Check if the addon is selected
      const isAddonSelected = addons.find((addon: any) => addon.name === valueArray.value)

      // If the addon is not selected, add it to the list
      if (!isAddonSelected) {
        dispatch(chooseAddOns({
          addOns: {
            name: valueArray.value,
          },
        }))
      }
    } else {
      // If the addon is selected, remove it from the list
      dispatch(removeAddOns({
        addOns: {
          name: e.currentTarget.value,
        },
      }))
    }
  }

  // Form inputs
  const formInputs = [
    {
      content: {
        name: 'online service',
        description: 'Access to multiplayer games',
        price: 1,
      },
    },
    {
      content: {
        name: 'larger storage',
        description: 'Access to multiplayer games',
        price: 2,
      },
    },
    {
      content: {
        name: 'customizable profile',
        description: 'Access to multiplayer games',
        price: 2,
      },
    },
  ]

  return (
    <Form id="addons" title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
          onSubmitHandler={onSubmitHandler}
    >
      <AnimatePresence>
        {showForm && (
          formInputs.map((input, index) => {
            // Transform Addon name to include "-" in name
            const addonName = input.content.name.replace(/\s+/g, '-').toLowerCase()
            return (
              <SelectInput onChange={(e) => handleSelect(e, index)} key={index}
                           content={{ name: `check-${addonName}`, value: input.content.name }}
                           checked={checked[index]}
              >
                <span className="capitalize">{input.content.name}</span>
              </SelectInput>
            )
          })
        )}
      </AnimatePresence>
    </Form>
  )
}

export default FormAddons