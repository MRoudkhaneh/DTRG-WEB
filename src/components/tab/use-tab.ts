import { useToggle } from 'hooks/use-toggle'
import { useCallback } from 'react'

export const useTab = ({
  initialIsOpen,
  expandable,
}: {
  initialIsOpen: boolean
  expandable: boolean
}) => {
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
