import { FC, memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { ICSearch } from 'icons/search'
import { Input } from 'components/input'
import { ICPlus } from 'icons/plus'
import { useUi } from 'hooks/use-ui'

export const PatientAssetsToolbar: FC<{ onSearch?: any; queryKey?: any }> =
  memo(({ onSearch, queryKey }) => {
    const { state } = useLocation() as any
    const { push } = useHistory()
    const { toggleDialog } = useUi()
    const { pathname } = useLocation()

    return (
      <Toolbar>
        <Text
          size="title"
          className="w-3/4 flex flex-col items-start "
          slot="start"
        >
          {state ? `${state.patient}'s assets` : 'Assets'}
        </Text>
        <div className="flex items-center w-1/3" slot="end">
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

          <Input
            className="mx-4"
            placeholder="Search by status or lot number ..."
            onChange={onSearch}
            icon={() => <ICSearch className="w-5 h-5 text-gray-600 " />}
            size="small"
          />

          {!pathname.includes('patients') && (
            <Tooltip content="Create">
              <Button
                icon
                className="peer"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleDialog({
                    open: true,
                    type: 'asset-edit',
                    queryKey,
                  })
                }}
              >
                <ICPlus className="w-8 h-8 text-primary" />
              </Button>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    )
  })
