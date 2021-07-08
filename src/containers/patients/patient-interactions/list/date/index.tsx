export const PatientInteractionListDate = ({ item }) => {
  return (
    <span className="text-blue-600 text-xs">
      {item.interaction_datetime.slice(0, 10)}
    </span>
  )
}
