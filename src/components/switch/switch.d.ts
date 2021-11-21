interface ISwitch {
  className?: string
  checked?: boolean
  label?: string
  name?: string
  onChange?: (open: boolean) => void
  size?: 'small' | 'large'
  disabled?: boolean
  withError?: boolean
}
