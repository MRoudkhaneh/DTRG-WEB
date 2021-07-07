type TColumn = {
  head?: string
  key?: string
  width?: string
  check?: boolean
  render?: any
}

interface ITable {
  columns?: Array<TColumn>
  className?: string
  data?: any
  expand?: any
  onPaginate?: any
  loading?: boolean
  fetching?: boolean
  page?: number
  total?: number
}

interface ITableCell {
  column?: any
  index?: any
  item?: any
  columns?: Array<TColumn>
}

interface ITableRow {
  item?: any
  columns?: Array<TColumn>
  index?: any
  expand?: any
  loading?: boolean
  length?: any
}

interface ITableHead {
  columns?: Array<TColumn>
}
