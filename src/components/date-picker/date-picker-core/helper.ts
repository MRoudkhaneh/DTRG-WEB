export const datePickerOnChange = (date, time, onChange) => {
  const array = date.toLocaleDateString().split('/')
  if (time)
    onChange(
      `${array[2]}-${array[0]}-${
        array[1]
      } ${date.getHours()}:${date.getMinutes()}`
    )
  else onChange(`${array[2]}-${array[0]}-${array[1]}`)
}
