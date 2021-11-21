import { Fragment, memo } from 'react'

export const ConfirmBody = memo(({ title, description }: Partial<IConfirm>) => {
  return (
    <Fragment>
      <span className="text-lg text-gray-800 dark:text-gray-200 " slot="title">
        {title}
      </span>
      <span className="pt-10 text-light dark:text-dark" slot="description">
        {description}
      </span>
    </Fragment>
  )
})
