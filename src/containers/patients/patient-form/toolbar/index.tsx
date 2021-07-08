import { memo } from 'react'
import { Button, Text, Toolbar, Tooltip } from 'components'
import { useHistory } from 'react-router'
import { ICArrowLeft } from 'icons'

export const PatientFormToolbar = memo(() => {
  const { push } = useHistory()
  return (
    <Toolbar>
      <Text
        size="header"
        className="w-1/3 flex flex-col items-start"
        slot="start"
      >
        Add new patient
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
