export const AuditListUser = <
  T extends { history_user: { full_name: string } }
>({
  item,
}: {
  item: T
}) => {
  return (
    <span className="text-light dark:text-dark">
      {item.history_user?.full_name}
    </span>
  )
}
