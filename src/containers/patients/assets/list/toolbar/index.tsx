import { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

export const PatientAssetsToolbar = memo(() => {
  const { state } = useLocation() as any
  const { push } = useHistory()

  return (
    <Toolbar>
      <Text
        size="title"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        {state ? `${state.patient}'s assets` : 'Assets'}
      </Text>
      <div className="flex items-center" slot="end">
        <Tooltip content="Go back">
          <Button
            className="peer"
            onClick={() => push('/admin/patients')}
            icon
            id="previous"
          >
            <ICArrowLeft className="w-7 h-7 text-primary" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  )
})
