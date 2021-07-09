import { useUi } from 'hooks/use-ui'
import { classNames } from 'utils/classes'

export const PatientInteractionListDetails = ({ item }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <span
      className={classNames(
        ' text-xs',
        dark ? 'text-gray-300' : 'text-gray-600'
      )}
    >
      {item.contact_details.substr(0, 450)}
    </span>
  )
}
