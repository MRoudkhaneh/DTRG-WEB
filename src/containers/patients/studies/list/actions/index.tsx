import { Button } from 'components/button'
import { ICDelete } from 'icons/delete'
import { Tooltip } from 'components/tooltip'
import { ICEdit } from 'icons/edit'
import { useDialog } from 'hooks/use-dialog'

export const PatientStudiesListActions = ({ item, queryKey }) => {
  const { toggleDialog } = useDialog()
  return (
    <div className="list-action">
      <Tooltip content="Edit">
        <Button
          icon
          className="peer "
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-study-form',
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
            toggleDialog({
              open: true,
              type: 'patient-study-delete',
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
