import { memo } from 'react'
import { Text, Toolbar, Tooltip, Button } from 'components'
import { useHistory, useLocation } from 'react-router-dom'
import { ICArrowLeft } from 'icons'

export const PatientAssetsToolbar = memo(() => {
  const {
    state: { patient },
  } = useLocation() as any
  const { push } = useHistory()
  return (
    <Toolbar>
      <Text
        size="title"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        {`${patient}'s assets`}
      </Text>
      <div className="flex items-center" slot="end">
        <Tooltip content="Go back">
          <Button className="peer" onClick={() => push('/admin/patients')} icon>
            <ICArrowLeft className="w-7 h-7 text-primary" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  )
})
