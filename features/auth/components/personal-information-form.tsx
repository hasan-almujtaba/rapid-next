import { FormProvider, useForm } from 'react-hook-form'

import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { useAuth } from 'features/auth'

export const PersonalInformationForm = () => {
  const { user } = useAuth()

  const formMethods = useForm({
    values: {
      name: user?.name,
      email: user?.email,
    },
  })

  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Use a permanent email address where you can receive mail.
        </p>
      </div>

      <FormProvider {...formMethods}>
        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            {/* <div className="col-span-full flex items-center gap-x-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
          />
          <div>
            <Button size="sm">Change avatar</Button>
            <p className="mt-2 text-xs leading-5 text-gray-400">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div> */}

            <div className="col-span-full">
              <Input
                label="Full name"
                name="name"
              />
            </div>

            <div className="col-span-full">
              <Input
                label="Email"
                name="email"
              />
            </div>
          </div>

          <div className="mt-8 flex">
            <Button>Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
