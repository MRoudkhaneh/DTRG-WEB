import { FC, memo } from 'react'

export const Tooltip: FC<{ children?: any; content?: any }> = memo(
  ({ children, content }) => {
    return (
      <div>
        {children}
        <span className="bg-gray-700/60 text-xs text-gray-200 px-1 rounded  shadow-xl z-50 absolute mt-1 hidden peer-hover:block animate-fade-in ">
          {content}
        </span>
      </div>
    )
  }
)
