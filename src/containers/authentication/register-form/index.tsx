import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'
import { Tab } from 'components/tab'

import { classNames } from 'utils/classes'

import { useRegister } from './use-register'
import { FormControl } from 'components/form-control'
import { FormInput } from 'components/form-input'

export const RegisterForm = memo(() => {
  const { isLoading, onSubmit, defaultValues, onPush } = useRegister()

  return (
    <FormControl
      className="w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-14 "
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    >
      <Tab text="Register" justify="center">
        <div className="col-center space-y-8 ">
          <FormInput
            name="first_name"
            type="text"
            required
            placeholder="Enter your first name"
            className="mt-10"
          />
          <FormInput
            name="last_name"
            type="text"
            required
            placeholder="Enter your last name"
            className="mt-10"
          />
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
          <FormInput
            name="verification_code"
            type="number"
            required
            placeholder="Enter your verification code"
          />
          <div className="col-center space-y-4 w-full mb-6" slot="actions">
            <Button
              icon
              className="w-full h-12 text-white  shadow-blue bg-secondary dark:bg-primary mt-4"
              role="confirm"
              type="submit"
              loading={isLoading}
            >
              Register
            </Button>

            <Button
              icon
              role="cancel"
              className={classNames(
                'w-full h-12 ',
                'text-secondary dark:text-primary'
              )}
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
