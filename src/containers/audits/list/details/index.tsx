export const AuditListDetails = <T extends { history_change_reason: string }>({
  item,
}: {
  item: T
}) => {
  if (item.history_change_reason)
    return (
      <td className="w-full">
        <span className="flex items-center justify-center py-6 text-blue-300 text-lg font-semibold">
          {item.history_change_reason}
        </span>
      </td>
    )
  return null
}
