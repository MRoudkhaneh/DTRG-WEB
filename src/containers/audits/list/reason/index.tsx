export const AuditListReason = <T extends { history_change_reason: string }>({
  item,
}: {
  item: T
}) => {
  return (
    <span className="text-gray-600 dark:text-gray-300 ">
      {item.history_change_reason?.length > 100
        ? item?.history_change_reason?.slice(0, 100) + '.....'
        : item?.history_change_reason}
    </span>
  )
}
