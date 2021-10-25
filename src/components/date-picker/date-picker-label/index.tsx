import { FC } from 'react'

export const DatePickerLable = ({ label }: IDatePicker) => {
  if (label)
    return <label className=" mb-2 text-light dark:text-dark">{label}</label>
  else return null
}
