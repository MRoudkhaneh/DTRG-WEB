import { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ICPlus } from 'icons/plus'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

import { usePatientStudiesList } from '../use-patient-studies-list'
import { useDialog } from 'hooks/use-dialog'

export const PatientStudiesListToolbar = memo(() => {
  const { queryKey } = usePatientStudiesList()
  const { toggleDialog } = useDialog()
  const navigate = useNavigate()
  const {
    state: { patient },
  } = useLocation() as any

  return (
    <Toolbar>
      <Text
        size="title"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        {`${patient}'s studies`}
      </Text>
      <div className="flex items-center justify-end w-1/4 " slot="end">
        <Tooltip content="Go back">
          <Button className="peer" onClick={() => navigate(-1)} icon>
            <ICArrowLeft className="w-7 h-7 text-primary" />
          </Button>
        </Tooltip>
        <Tooltip content="Create">
          <Button
            icon
            className="peer"
            onClick={(e) => {
              e.stopPropagation()
              toggleDialog({
                open: true,
                type: 'patient-study-form',
                queryKey,
              })
            }}
          >
            <ICPlus className="w-10 h-10 text-primary" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  )
})
