import { memo } from 'react'
import { Table } from 'components/table'

import { columns, useAuditsList } from './use-audits-list'
import { AuditsToolbar } from './toolbar'
import { AuditListDetails } from './details'

export const AuditsList = memo(() => {
  const { data, page, onPaginate, isLoading } = useAuditsList()

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
        expand={(item) => <AuditListDetails item={item} />}
      />
    </div>
  )
})
