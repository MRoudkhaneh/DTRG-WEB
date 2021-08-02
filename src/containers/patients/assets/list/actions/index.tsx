import { useUi } from 'hooks/use-ui'
import { Button } from 'components/button'
import { Tooltip } from 'components/tooltip'
import { ICDelete } from 'icons/delete'
import { ICEdit } from 'icons/edit'

export const PatientAssetActions = ({ item, queryKey }) => {
  const { toggleDialog } = useUi()

  return (
    <div className=" hidden group-hover:flex  items-center justify-end ">
      <Tooltip content="Edit">
        <Button
          icon
          className="peer"
          onClick={(e) => {
            e.stopPropagation()
            toggleDialog({
              open: true,
              type: 'asset-edit',
              data: item,
              queryKey,
            })
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
            if (e.shiftKey)
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
