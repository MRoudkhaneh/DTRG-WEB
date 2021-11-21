interface ITextArea {
  className?: string
  label?: string
  value?: string
  placeholder?: string
  name?: any
  id?: string
  onChange?: ChangeEvent<HTMLTextAreaElement>
  size?: 'small' | 'large'
  disabled?: boolean
  expanded?: boolean
  error?: string
}
