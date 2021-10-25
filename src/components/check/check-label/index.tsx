import { FC } from 'react'
import { TCheck } from '../check'

export const CheckLabel = ({ label, id }: Partial<TCheck>): JSX.Element => {
  if (label)
    return (
      <label className="text-light dark:text-dark" htmlFor={id}>
        {label}
      </label>
    )
  else return null
}
