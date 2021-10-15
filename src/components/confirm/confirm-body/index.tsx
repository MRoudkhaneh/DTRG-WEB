import { FC, Fragment, memo } from 'react'

export const ConfirmBody: FC<Partial<IConfirm>> = memo(
  ({ title, description }) => {
    return (
      <Fragment>
        <span
          className="text-lg text-gray-800 dark:text-gray-200 "
          slot="title"
        >
          {title}
        </span>
        <span className="pt-10 text-light dark:text-dark" slot="description">
          {description}
        </span>
      </Fragment>
    )
  }
)
