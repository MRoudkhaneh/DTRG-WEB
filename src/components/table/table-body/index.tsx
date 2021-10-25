import { FC } from 'react'
import { TableRow } from '../table-row'

export const TableBody = ({
  loading,
  data,
  columns,
  expand,
  onRowClick,
  expanded,
}: ITable) => {
  return loading && (!data || typeof data === 'string' || data.length === 0) ? (
    Array.from(new Array(10)).map((item, index) => (
      <TableRow
        key={index}
        item={item}
        columns={columns}
        index={index}
        expand={expand}
        loading={loading}
      />
    ))
  ) : data && data.length > 0 ? (
    (data || []).map((item, index) => (
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
    ))
  ) : (
    <span className="text-gray-600 pt-6 text-lg">No items</span>
  )
}
