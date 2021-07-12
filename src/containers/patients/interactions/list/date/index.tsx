import { useUi } from 'hooks/use-ui'
import { classNames } from 'utils/classes'

export const PatientInteractionListDate = ({ item }) => {
  const {
    uiState: { dark },
  } = useUi()
  return (
    <span className={classNames(dark ? 'text-gray-300' : 'text-gray-600')}>
      {item.interaction_datetime.slice(0, 10)}
    </span>
  )
}
