type TColumn = {
  head?: string
  key: string
  width?: string
  check?: boolean
  render?: (data: any) => ReactNode
}

interface ITable {
  columns: Array<TColumn>
  className?: string
  data?: any
  expand?: (item: any) => ReactNode
  onPaginate?: (page: number) => void
  loading?: boolean
  fetching?: boolean
  page: number
  total: number
  onRowClick?: (data: any) => void
  expanded?: boolean
}

type ITableBody = Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded' | 'data'
>

type ITableCell = { item?: any; index?: number; column: TColumn } & Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded'
>

type ITableRow = { item?: any; index?: number; length?: number } & Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded'
>

type ITableHead = Pick<ITable, 'columns' | 'loading'>
