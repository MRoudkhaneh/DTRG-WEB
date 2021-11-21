interface IDropdownOption {
  children?: ReactNode
  onClick?: Function | MouseEventHandler<HTMLSpanElement>
  active?: boolean
}
