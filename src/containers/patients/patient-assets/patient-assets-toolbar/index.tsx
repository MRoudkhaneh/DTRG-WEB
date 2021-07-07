import { memo } from 'react'

import { Text, Toolbar } from 'components'
import { useLocation } from 'react-router-dom'

export const PatientAssetsToolbar = memo(() => {
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
        {`${patient}'s assets`}
      </Text>
      <div className="flex items-center w-1/4 " slot="end"></div>
    </Toolbar>
  )
})
