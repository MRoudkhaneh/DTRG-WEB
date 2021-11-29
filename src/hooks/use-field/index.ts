import { useState, ChangeEvent } from 'react'

type TFiledEvent = ChangeEvent<HTMLInputElement>
type TCallbacks<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (
    event: TFiledEvent
  ) => void
}

export const useField = <T>(initialState: T) => {
  const [state, setState] = useState(initialState)

  const callbacks = {} as TCallbacks<T>
  Object.keys(initialState).forEach(
    (key) =>
      (callbacks[`on${key[0].toUpperCase() + key.slice(1)}Change`] = (
        event: TFiledEvent
      ) =>
        setState((prev) => ({
          ...prev,
          [key]: event.target.value || event.target.checked,
        })))
  )

  return [state, callbacks] as const
}
