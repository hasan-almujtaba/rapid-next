import { Field, Label, Input as HeadlessInput } from '@headlessui/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'

type TProps = {
  label: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const PasswordInput = (props: TProps) => {
  const { label, name = '', ...rest } = props

  const { register } = useFormContext()

  const [type, setType] = useState('password')

  const toggle = () => (type === 'text' ? setType('password') : setType('text'))

  return (
    <Field>
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </Label>
      <div className="flex h-9 rounded-md border border-gray-300 px-0.5 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-900">
        <HeadlessInput
          type={type}
          className="h-full flex-1 rounded-md border-0 ring-0 focus:ring-0 focus:ring-transparent sm:text-sm sm:leading-6"
          {...register(name)}
          {...rest}
        ></HeadlessInput>

        <button
          className="mr-2.5"
          onClick={toggle}
          type="button"
        >
          {type === 'password' ? (
            <EyeIcon className="h-5 w-5" />
          ) : (
            <EyeSlashIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </Field>
  )
}
