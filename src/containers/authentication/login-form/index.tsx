import { memo } from 'react'
import { useHistory } from 'react-router'
import { Button, Form, Input, Tab } from 'components'

import { useLogin } from './use-login'
import { useUi } from 'hooks/use-ui'
import { classNames } from 'utils/classes'

export const LoginForm = memo(() => {
  const { push } = useHistory()
  const { control, handleSubmit, isLoading, onSubmit } = useLogin()
  const {
    uiState: { dark },
  } = useUi()
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
            interactive
            control={control}
          />
          <Input
            control={control}
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            interactive
          />
          <div className="col-center space-y-4 w-full mb-6" slot="actions">
            <Button
              className="w-full h-12  bg-pink-700 text-white"
              role="confirm"
              type="submit"
              loading={isLoading}
            >
              login
            </Button>
            <Button
              icon
              role="cancel"
              className={classNames(
                'w-full h-12 ',
                dark ? 'text-primary' : 'text-secondary'
              )}
              type="button"
              onClick={() => push('/authentication/password')}
            >
              Forgot password
            </Button>
            <Button
              icon
              role="cancel"
              className={classNames(
                'w-full h-12 ',
                dark ? 'text-primary' : 'text-secondary'
              )}
              type="button"
              onClick={() => push('/authentication/register')}
            >
              Create a new account
            </Button>
          </div>
        </div>
      </Tab>
    </Form>
  )
})
