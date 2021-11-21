import { classNames } from 'utils/classes'

export const PatientInteractionListDetails = ({ item }: { item: any }) => {
  return (
    <span className={classNames(' text-xs text-gray-600 dark:text-gray-300')}>
      {item.contact_details.substr(0, 450)}
    </span>
  )
}
