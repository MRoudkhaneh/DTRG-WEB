import { memo } from 'react'
import { Button } from 'components/button'
import { Tab } from 'components/tab'
import { Input } from 'components/input'
import { Form } from 'components/form'

import { useLogin } from './use-login'

export const LoginForm = memo(() => {
  const { control, handleSubmit, isLoading, onSubmit, onPush, href } =
    useLogin()

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-14 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <Tab text="Login" justify="center">
        <div className="col-center space-y-8 ">
          <Input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-10"
            control={control}
          />
          <Input
            control={control}
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
    </Form>
  )
})
