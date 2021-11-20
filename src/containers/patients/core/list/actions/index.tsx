import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICDelete } from 'icons/delete'
import { ICEdit } from 'icons/edit'
import { ICEyeFill } from 'icons/eye-fill'
import { ICInteractions } from 'icons/interactions'
import { ICStudies } from 'icons/studies'
import { useDialog } from 'hooks/use-dialog'

export const PatientListActions = ({ item, queryKey }) => {
  const { toggleDialog } = useDialog()
  const push = useNavigate()

  return (
    <div className="list-action">
      <Tooltip content="Studies">
        <Button
          className="peer"
          icon
          onClick={(e) => {
            e.stopPropagation()
            push(`studies/${item.id}`, {
              state: { patient: `${item.first_name} ${item.surename}` },
            })
          }}
        >
          <ICStudies className="text-yellow-300 w-4 h-4 mr-3" />
        </Button>
      </Tooltip>
      <Tooltip content="Interactions">
        <Button
          className="peer"
          icon
          onClick={(e) => {
            e.stopPropagation()
            push(`interactions/${item.id}`, {
              state: { patient: `${item.first_name} ${item.surename}` },
            })
          }}
        >
          <ICInteractions className="text-green-300 w-4 h-4 mr-3" />
        </Button>
      </Tooltip>
      <Tooltip content="Assets">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            push(`assets/${item.id}`, {
              state: { patient: `${item.first_name} ${item.surename}` },
            })
          }}
        >
          <ICEyeFill className="text-blue-300 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
          id="Edit"
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'patient-edit',
              data: item,
              queryKey,
            })
          }}
        >
          <ICEdit className="text-gray-500 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            if (e.shiftKey)
              toggleDialog({
                open: true,
                type: 'patient-delete',
                data: item,
                queryKey,
              })
          }}
        >
          <ICDelete className="text-red-500 w-4 h-4  " />
        </Button>
      </Tooltip>
    </div>
  )
}
