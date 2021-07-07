interface IConfirm {
  onConfirm?: Function
  title?: string
  description?: string
  onCancel?: Function
  type?: 'delete' | 'warning'
  loading?: boolean
  dark?: boolean
}
