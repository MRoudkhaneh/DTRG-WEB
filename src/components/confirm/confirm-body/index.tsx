import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils/classes'

export const ConfirmBody: FC<IConfirm> = memo(({ title, description }) => {
  return (
    <Fragment>
      <span
        className={classNames('text-lg text-gray-800 dark:text-gray-200 ')}
        slot="title"
      >
        {title}
      </span>
      <span
        className={classNames('pt-10 text-light dark:text-dark ')}
        slot="description"
      >
        {description}
      </span>
    </Fragment>
  )
})
