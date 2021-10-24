import { FC, memo } from 'react'
import { TForm } from './form'

export const Form: FC<TForm> = memo(({ children, ...rest }) => {
  return (
    <form slot="wrapper" {...rest}>
      {children && <div slot="children">{children}</div>}
    </form>
  )
})
