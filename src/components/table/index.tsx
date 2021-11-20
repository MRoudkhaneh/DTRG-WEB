import { FC, memo } from 'react'
import { Pagination } from 'components/pagination'
import { classNames } from 'utils/classes'

import { TableHead } from './table-head'
import { TableBody } from './table-body'

export const Table = memo(
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
  }: ITable) => {
    return (
      <div
        className={classNames('w-full flex flex-col items-center', className)}
        slot="wrapper"
      >
        <table className="w-full flex flex-col items-center">
          <TableHead columns={columns} loading={loading} />
          <TableBody
            columns={columns}
            data={data}
            loading={loading}
            expand={expand}
            onRowClick={onRowClick}
            expanded={expanded}
          />
        </table>

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
