import { useUi } from 'hooks/use-ui'
import { Button } from 'components/button'
import { ICDelete } from 'icons/delete'
import { Tooltip } from 'components/tooltip'
import { ICEdit } from 'icons/edit'

export const PatientInteractionListActions = ({ item, queryKey }) => {
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
              queryKey,
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
            if (e.ctrlKey)
              toggleDialog({
                open: true,
                type: 'patient-interaction-delete',
                data: item,
                queryKey,
              })
          }}
        >
          <ICDelete className="text-red-500 w-5 h-5" />
        </Button>
      </Tooltip>
    </div>
  )
}
