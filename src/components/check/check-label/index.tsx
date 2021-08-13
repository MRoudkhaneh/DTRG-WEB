import { FC } from 'react'

export const CheckLabel: FC<ICheck> = ({ label, id }) => {
  if (label)
    return (
      <label className="text-light dark:text-dark" htmlFor={id}>
        {label}
      </label>
    )
  else return null
}
