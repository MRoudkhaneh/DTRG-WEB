import { memo } from 'react'
import { Table } from 'components/table'

import { useAuditsList } from './use-audits-list'
import { AuditsToolbar } from './toolbar'

export const AuditsList = memo(() => {
  const { data, columns, page, onPaginate, isLoading } = useAuditsList()

  return (
    <div className="w-full">
      <AuditsToolbar />
      <Table
        className="w-full my-10"
        columns={columns}
        total={data.count}
        data={data.results}
        page={page}
        onPaginate={onPaginate}
        loading={isLoading}
      />
    </div>
  )
})
