import { Button, Tooltip } from 'components'
import { useUi } from 'hooks'
import { ICDelete, ICEdit, ICEyeFill, ICInteractions } from 'icons'
import { useHistory } from 'react-router-dom'

export const PatientListActions = ({ item }) => {
  const { toggleDialog } = useUi()
  const { push } = useHistory()

  return (
    <div className=" hidden group-hover:flex  items-center justify-end ">
      <Tooltip content="Interactions">
        <Button
          className="peer"
          icon
          onClick={(e) => {
            e.stopPropagation()
            push(`patients/interactions/${item.id}`)
          }}
        >
          <ICInteractions className="text-green-300 w-5 h-5 mr-3" />
        </Button>
      </Tooltip>
      <Tooltip content="Assets">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            push(`patients/assets/${item.id}`)
          }}
        >
          <ICEyeFill className="text-blue-300 w-5 h-5 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Edit">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({ open: true, type: 'patient-edit', data: item })
          }}
        >
          <ICEdit className="text-gray-500 w-5 h-5 mr-3 " />
        </Button>
      </Tooltip>
      <Tooltip content="Delete">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({ open: true, type: 'patient-delete', data: item })
          }}
        >
          <ICDelete className="text-red-500 w-5 h-5  " />
        </Button>
      </Tooltip>
    </div>
  )
}
