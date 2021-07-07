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
        <span className="pt-10 text-indigo-600" slot="description">
          {description}
        </span>
      </Fragment>
    )
  }
)
