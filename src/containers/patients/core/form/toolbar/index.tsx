import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

export const PatientFormToolbar = memo(() => {
  const navigate = useNavigate()
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
          <Button className="peer" onClick={() => navigate(-1)} icon>
            <ICArrowLeft className="w-7 h-7 text-primary" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  )
})
