import { FC, memo } from 'react'
import { TForm } from './form'

export const Form = memo(({ children, ...rest }: TForm) => {
  return (
    <form slot="wrapper" {...rest}>
      {children && <div slot="children">{children}</div>}
    </form>
  )
})
