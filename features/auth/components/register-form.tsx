/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { PasswordInput } from 'components/ui/password-input'

import { useAuth } from '../hooks'

type Inputs = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export const RegisterForm = () => {
  const formMethods = useForm<Inputs>()
  const { handleSubmit } = formMethods

  const { register } = useAuth()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    register(data)
  }

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=slate&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <FormProvider {...formMethods}>
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="Name"
                name="name"
              />

              <Input
                label="Email"
                name="email"
              />

              <PasswordInput
                label="Password"
                name="password"
              />

              <PasswordInput
                label="Confirm Password"
                name="password_confirmation"
              />

              <Button
                className="w-full"
                type="submit"
              >
                Register
              </Button>
            </form>
          </FormProvider>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link
              href="/login"
              className="font-semibold leading-6 text-slate-600 hover:text-slate-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
