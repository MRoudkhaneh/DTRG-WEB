import { FC } from 'react'

export const DatePickerLable: FC<IDatePicker> = ({ label }) => {
  if (label)
    return <label className=" mb-2 text-light dark:text-dark">{label}</label>
  else return null
}
