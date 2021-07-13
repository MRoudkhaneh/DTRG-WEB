import { FC, memo } from 'react'
import { Pagination } from 'components/pagination'
import { classNames } from 'utils/classes'

import { TableHead } from './table-head'
import { TableRow } from './table-row'

export const Table: FC<ITable> = memo(
  ({ className, columns, data, expand, onPaginate, loading, page, total }) => {
    return (
      <div
        className={classNames('w-full flex flex-col items-center', className)}
        slot="wrapper"
      >
        <TableHead columns={columns} loading={loading} />

        {loading && (!data || data.length === 0) ? (
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
        )}

        {data && onPaginate && (
          <Pagination
            className="mt-10"
            total={total}
            page={page === null ? 1 : page}
            onPaginate={onPaginate}
            disabled={loading}
          />
        )}
      </div>
    )
  }
)
