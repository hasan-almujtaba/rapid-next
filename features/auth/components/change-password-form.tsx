import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from 'components/ui/button'
import { PasswordInput } from 'components/ui/password-input'
import { changePasswordRequest, TChangePasswordRequest } from 'features/auth'

export const ChangePasswordForm = () => {
  const { push } = useRouter()

  const formMethods = useForm<TChangePasswordRequest>()

  const { mutate } = useMutation({
    mutationFn: (data: TChangePasswordRequest) => changePasswordRequest(data),
    onSuccess: (data) => {
      toast.success(data.message)
      formMethods.reset()
      push('/login')
    },
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    mutate(data)
  })

  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Change password
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Update your password associated with your account. You need to login
          back after changing your password.
        </p>
      </div>

      <FormProvider {...formMethods}>
        <form
          className="md:col-span-2"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <PasswordInput
                label="Password"
                name="current_password"
              />
            </div>

            <div className="col-span-full">
              <PasswordInput
                label="New Password"
                name="password"
              />
            </div>

            <div className="col-span-full">
              <PasswordInput
                label="Confirm password"
                name="password_confirmation"
              />
            </div>
          </div>

          <div className="mt-8 flex">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
