interface IConfirm {
  title: string
  description: string

  loading: boolean

  onCancel: () => void
  onConfirm: () => void
}
