export const AuditListDate = <T extends { history_date: string }>({
  item,
}: {
  item: T
}) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600 dark:text-gray-300">
        {item.history_date?.slice(0, 10)}
      </span>
    </div>
  )
}
