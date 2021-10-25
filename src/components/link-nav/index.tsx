import { FC, memo } from 'react'

export const LinkNav = memo(({ children, size, onClick }: ILinkNav) => {
  return (
    <button
      slot="wrapper"
      onClick={onClick}
      className={` cursor-pointer focus:outline-none  ${
        size === 'title'
          ? 'text-lg'
          : size === 'small'
          ? 'text-sm'
          : 'text-base'
      }`}
    >
      {children}
    </button>
  )
})
