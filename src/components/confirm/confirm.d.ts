interface IConfirm {
  title: string
  description: string
  type: 'delete' | 'warning'
  loading: boolean
  dark: boolean
  onCancel: () => void
  onConfirm: () => void
}
