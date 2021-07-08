import { useUi } from 'hooks'
import { Tooltip, Button } from 'components'
import { ICEdit, ICDelete } from 'icons'

export const PatientInteractionListActions = ({ item }) => {
  const { toggleDialog } = useUi()
  return (
    <div className=" hidden group-hover:flex  items-center justify-end ">
      <Tooltip content="Edit">
        <Button
          icon
          className="peer "
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-interactions-form',
              data: { ...item, isEditing: true },
            })
          }}
        >
          <ICEdit className="text-gray-500 w-5 h-5 mr-4" />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          icon
          className="peer "
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-interaction-delete',
              data: item,
            })
          }}
        >
          <ICDelete className="text-red-500 w-5 h-5" />
        </Button>
      </Tooltip>
    </div>
  )
}
