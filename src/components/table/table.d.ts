type TTableItem = Record<string, any>

type TColumn = {
  head?: string
  key: string
  width?: string
  render?: (data: TTableItem) => ReactNode
}

type ITable = {
  columns: TColumn[]
  data: TTableItem[]
  className?: string
  loading?: boolean
  fetching?: boolean
  page: number
  total: number
  expanded?: Record<string, any>
  onRowClick?: (item: TTableItem) => void
  expand?: (item: TTableItem) => ReactNode
  onPaginate?: (page: number) => void
}

type ITableBody = Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded' | 'data'
>

type ITableCell = { item?: any; index?: number; column: TColumn } & Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded'
>

type ITableRow = { item?: any; index?: number; length: number } & Pick<
  ITable,
  'columns' | 'expand' | 'loading' | 'onRowClick' | 'expanded'
>

type ITableHead = Pick<ITable, 'columns' | 'loading'>
