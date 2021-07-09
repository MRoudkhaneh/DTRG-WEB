export const PatientInteractionListDate = ({ item }) => {
  return (
    <span className="text-gray-300">
      {item.interaction_datetime.slice(0, 16)}
    </span>
  )
}
