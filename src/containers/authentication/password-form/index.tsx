import { memo } from 'react'

import { Button, Form, Input, Tab } from 'components'
import { useHistory } from 'react-router-dom'
import { usePassword } from './use-password'
import { classNames } from 'utils/classes'

export const PasswordForm = memo(() => {
  const { push } = useHistory()
  const { control, handleSubmit, isLoading, onSubmit } = usePassword()

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
            interactive
          />
          <div className="col-center space-y-4 w-full mb-6" slot="actions">
            <Button
              icon
              className="w-full h-12 text-white shadow-blue bg-secondary dark:bg-primary mt-4"
              role="confirm"
              type="submit"
              loading={isLoading}
            >
              Submit
            </Button>
            <Button
              icon
              role="cancel"
              className={classNames(
                'w-full h-12 text-secondary dark:text-primary'
              )}
              type="button"
              onClick={() => push('/authentication/login')}
            >
              Login instead
            </Button>
          </div>
        </div>
      </Tab>
    </Form>
  )
})
