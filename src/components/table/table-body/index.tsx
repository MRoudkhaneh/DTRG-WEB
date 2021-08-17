import { FC } from 'react'
import { TableRow } from '../table-row'

export const TableBody: FC<ITable> = ({ loading, data, columns, expand }) => {
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
        key={index}
        item={item}
        columns={columns}
        index={index}
        expand={expand}
        loading={loading}
        length={data.length}
      />
    ))
  ) : (
    <span className="text-gray-600 pt-6 text-lg">No items</span>
  )
}
