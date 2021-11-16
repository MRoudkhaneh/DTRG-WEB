import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICDelete } from 'icons/delete'
import { ICEdit } from 'icons/edit'
import { useDialog } from 'hooks/use-dialog'

export const PatientAssetActions = ({ item, queryKey }) => {
  const { toggleDialog } = useDialog()

  return (
    <div className="list-action">
      <Tooltip content="Edit">
        <Button
          icon
          className="peer"
          id="edit"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'asset-edit',
              data: item,
              isEditing: true,
              queryKey,
            })
          }}
        >
          <ICEdit className="text-gray-500 w-5 h-5 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          id="delete"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'asset-delete',
              data: item,
              queryKey,
            })
          }}
        >
          <ICDelete className="text-red-500 w-5 h-5  " />
        </Button>
      </Tooltip>
    </div>
  )
}
