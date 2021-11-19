import { memo } from 'react'
import { Button } from 'components/button'
import { Tab } from 'components/tab'

import { FormControl } from 'components/form-control'
import { FormInput } from 'components/form-input'
import { useLogin } from './use-login'

export const LoginForm = memo(() => {
  const { isLoading, onSubmit, onPush, href, defaultValues } = useLogin()

  return (
    <FormControl
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-14 "
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <Tab text="Login" justify="center">
        <div className="col-center space-y-8 ">
          <FormInput
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-10"
          />
          <FormInput
            name="password"
            type="password"
            required
            placeholder="Enter your password"
          />
          <div className="col-center w-full mb-6" slot="actions">
            <Button
              icon
              className="w-full h-12 text-white shadow-blue bg-secondary dark:bg-primary my-4"
              type="submit"
              loading={isLoading}
            >
              login
            </Button>
            <a
              href={href}
              className=" text-secondary dark:text-primary text-center my-4 "
            >
              Forgot password
            </a>
            <Button
              icon
              className="w-full h-12 text-secondary dark:text-primary"
              type="button"
              onClick={onPush}
            >
              Create a new account
            </Button>
          </div>
        </div>
      </Tab>
    </FormControl>
  )
})
