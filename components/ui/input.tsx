import { Field, Label, Input as HeadlessInput } from '@headlessui/react'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

type TProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = (props: TProps) => {
  const { label, name = '', ...rest } = props

  const { register } = useFormContext()

  return (
    <Field>
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </Label>
      <HeadlessInput
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-900 sm:text-sm sm:leading-6"
        {...rest}
        {...register(name)}
      ></HeadlessInput>
    </Field>
  )
}
