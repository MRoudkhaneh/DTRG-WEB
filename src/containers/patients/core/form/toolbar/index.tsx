import { memo } from 'react'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { Link } from 'react-router-dom'

export const PatientFormToolbar = memo(() => {
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
        <Link to="/admin/patients">
          <Tooltip content="Go back">
            <Button className="peer" icon>
              <ICArrowLeft className="w-7 h-7 text-primary" />
            </Button>
          </Tooltip>
        </Link>
      </div>
    </Toolbar>
  )
})
