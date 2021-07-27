import { FC, memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useUi } from 'hooks/use-ui'
import { ICPlus } from 'icons/plus'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

import { usePatientStudiesList } from '../use-patient-studies-list'

export const PatientStudiesListToolbar: FC<{ onSearch?: any }> = memo(() => {
  const { queryKey } = usePatientStudiesList()
  const { toggleDialog } = useUi()
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
        {`${patient}'s studies`}
      </Text>
      <div className="flex items-center justify-end w-1/4 " slot="end">
        <Tooltip content="Go back">
          <Button className="peer" onClick={() => push('/admin/patients')} icon>
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
