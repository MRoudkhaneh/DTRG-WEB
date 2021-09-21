import { FC, memo } from 'react'
import { Pagination } from 'components/pagination'
import { classNames } from 'utils/classes'

import { TableHead } from './table-head'
import { TableBody } from './table-body'

export const Table: FC<ITable> = memo(
  ({
    className,
    columns,
    data,
    expand,
    onPaginate,
    loading,
    page,
    total,
    onRowClick,
    expanded,
  }) => {
    return (
      <div
        className={classNames('w-full flex flex-col items-center', className)}
        slot="wrapper"
      >
        <TableHead columns={columns} loading={loading} />
        <TableBody
          columns={columns}
          data={data}
          loading={loading}
          expand={expand}
          onRowClick={onRowClick}
          expanded={expanded}
        />
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
