interface ITab {
  children?: ReactNode
  text?: string
  className?: string
  expandable?: boolean
  initialIsOpen?: boolean
  open?: boolean
  justify?: 'center' | 'end' | 'start'
}
