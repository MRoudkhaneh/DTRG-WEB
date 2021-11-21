import { TableRow } from '../table-row'
import { TableRowLoading } from '../table-row/table-row-loading'

export const TableBody = ({
  loading,
  data,
  columns,
  expand,
  onRowClick,
  expanded,
}: ITableBody) => {
  if (loading && !data.length)
    return (
      <tbody className="w-full animate-pulse">
        {Array.from({ length: 10 }, (_, index) => index).map((item) => (
          <TableRowLoading key={item} columns={columns} />
        ))}
      </tbody>
    )
  return (
    <tbody className="w-full">
      {(data || []).map((item: any, index: number) => (
        <TableRow
          key={item.id}
          item={item}
          columns={columns}
          index={index}
          expand={expand}
          loading={loading}
          length={data.length}
          onRowClick={onRowClick}
          expanded={expanded}
        />
      ))}
    </tbody>
  )
}
