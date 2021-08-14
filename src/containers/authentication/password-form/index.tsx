import { memo } from 'react'
import { Button } from 'components/button'
import { Tab } from 'components/tab'
import { Input } from 'components/input'
import { Form } from 'components/form'

import { usePassword } from './use-password'

export const PasswordForm = memo(() => {
  const { control, handleSubmit, isLoading, onSubmit, onPush } = usePassword()

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Tab text="Password Recovery" justify="center">
        <div className="col-center space-y-8 ">
          <Input
            control={control}
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-10"
          />
          <div className="col-center space-y-4 w-full mb-6">
            <Button
              icon
              className="w-full h-12 text-white shadow-blue bg-secondary dark:bg-primary mt-4"
              type="submit"
              loading={isLoading}
              data-testid="submit"
            >
              Submit
            </Button>
            <Button
              icon
              className="w-full h-12 text-secondary dark:text-primary"
              type="button"
              onClick={onPush}
            >
              Login instead
            </Button>
          </div>
        </div>
      </Tab>
    </Form>
  )
})
