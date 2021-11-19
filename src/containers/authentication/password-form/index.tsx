import { memo } from 'react'
import { Button } from 'components/button'
import { Tab } from 'components/tab'

import { usePassword } from './use-password'
import { FormControl } from 'components/form-control'
import { FormInput } from 'components/form-input'

export const PasswordForm = memo(() => {
  const { isLoading, onSubmit, onPush, defaultValues } = usePassword()

  return (
    <FormControl
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-14"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <Tab text="Password Recovery" justify="center">
        <div className="col-center space-y-8 ">
          <FormInput
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
    </FormControl>
  )
})
