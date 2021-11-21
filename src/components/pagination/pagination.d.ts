interface IPagination {
  className?: string
  total: number
  page: number
  onPaginate?: (page: number) => void
  disabled?: boolean
}
