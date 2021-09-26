import { useHistory } from 'react-router-dom'
import { useUi } from 'hooks/use-ui'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICDelete } from 'icons/delete'
import { ICEdit } from 'icons/edit'
import { ICEyeFill } from 'icons/eye-fill'
import { ICInteractions } from 'icons/interactions'
import { ICStudies } from 'icons/studies'

export const PatientListActions = ({ item, queryKey }) => {
  const { toggleDialog } = useUi()
  const { push } = useHistory()

  return (
    <div className="list-action">
      <Tooltip content="Studies">
        <Button
          className="peer"
          icon
          onClick={(e) => {
            e.stopPropagation()
            push({
              pathname: `patients/studies/${item.id}`,
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
            push({
              pathname: `patients/interactions/${item.id}`,
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
            push({
              pathname: `patients/assets/${item.id}`,
              state: { patient: `${item.first_name} ${item.surename}` },
            })
          }}
        >
          <ICEyeFill className="text-blue-300 w-4 h-4 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
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
