import { useCallback, useState } from 'react'

type TUseToggle<T> = T extends boolean ? boolean : T

export const useToggle = <T>(initialState?: TUseToggle<T>) => {
  const [open, setOpen] = useState(initialState || false)
  return {
    open,
    toggle: useCallback(
      (props?: boolean) => {
        setOpen(props ? props : !open)
      },
      [open]
    ),
  }
}
