import { FC, Fragment, memo } from 'react'

export const ListItem = memo(({ children, className }: IListItem) => {
  return (
    <div className={`row-between rounded shadow  ${className}`} slot="wrapper">
      {typeof children !== 'object' ? (
        <div slot="children">{children}</div>
      ) : (
        children.length > 0 && (
          <Fragment>
            <div>
              {children.find((child) => child.props.slot === 'content')}
            </div>
            <div>{children.find((child) => child.props.slot === 'action')}</div>
          </Fragment>
        )
      )}
    </div>
  )
})
