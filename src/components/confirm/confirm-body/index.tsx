import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils/classes'

export const ConfirmBody: FC<IConfirm> = memo(
  ({ title, description, dark }) => {
    return (
      <Fragment>
        <span
          className={classNames(
            'text-lg ',
            dark ? 'text-gray-200' : 'text-gray-800'
          )}
          slot="title"
        >
          {title}
        </span>
        <span
          className={classNames('pt-10 ', dark ? 'text-dark' : 'text-light')}
          slot="description"
        >
          {description}
        </span>
      </Fragment>
    )
  }
)
