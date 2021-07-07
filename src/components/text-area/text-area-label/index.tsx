import { useUi } from 'hooks/use-ui'
import { FC, memo } from 'react'
import { classNames } from 'utils'

export const TextAreaLabel: FC<IInput> = memo(({ label }) => {
  const {
    uiState: { dark },
  } = useUi()
  if (label)
    return (
      <label
        className={classNames(
          ' mb-2',
          dark ? 'text-gray-300' : 'text-gray-800'
        )}
      >
        {label}
      </label>
    )
  else return null
})
