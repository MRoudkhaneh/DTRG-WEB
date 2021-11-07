import { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

export const AuditsToolbar = memo(() => {
  const { goBack } = useHistory()

  return (
    <Toolbar>
      <Text
        size="title"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        Audits
      </Text>
      <div className="flex items-center " slot="end">
        <Tooltip content="Go back">
          <Button className="peer" onClick={goBack} icon id="previous">
            <ICArrowLeft className="w-7 h-7 text-primary" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  )
})
