import { useUi } from 'hooks/use-ui'
import { FC, Fragment, memo } from 'react'
import { classNames } from 'utils/classes'

export const Toolbar: FC<IToolbar> = memo(({ children }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <div
      className={classNames(
        'w-full flex items-center justify-between border-b pb-4',
        dark ? 'border-gray-700' : 'border-gray-200'
      )}
    >
      {typeof children !== 'object' ? (
        <div slot="children">{children}</div>
      ) : (
        children.length > 0 && (
          <Fragment>
            <>{children.find((child) => child.props.slot === 'start')}</>
            <>{children.find((child) => child.props.slot === 'end')}</>
          </Fragment>
        )
      )}
    </div>
  )
})
