import { classNames } from 'utils/classes'

export const PatientInteractionListDate = ({ item }: { item: any }) => {
  return (
    <span className={classNames('text-gray-600 dark:text-gray-300')}>
      {item.interaction_datetime.slice(0, 10)}
    </span>
  )
}
