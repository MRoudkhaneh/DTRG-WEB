import { useToggle } from 'hooks/use-toggle'
import { useCallback } from 'react'

export const useTab = ({ initialIsOpen, expandable }) => {
  const { open, toggle } = useToggle(initialIsOpen)
  return {
    open,
    onExpand: useCallback(
      (e) => {
        if (expandable) {
          e.stopPropagation()
          toggle()
        }
      },
      [open]
    ),
  }
}
