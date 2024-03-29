import { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ICArrowLeft } from 'icons/arrow-left'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { ICSearch } from 'icons/search'
import { Input } from 'components/input'
import { ICPlus } from 'icons/plus'
import { ICExport } from 'icons/export'
import { useDialog } from 'hooks/use-dialog'
import { TUsePatientAsset } from '../use-patient-assets'

type TPatientsAssetsToolbar = Pick<
  TUsePatientAsset,
  'onSearch' | 'queryKey' | 'exportLoading' | 'onExport'
>

export const PatientAssetsToolbar = memo(
  ({ onSearch, queryKey, onExport, exportLoading }: TPatientsAssetsToolbar) => {
    const { state } = useLocation() as any
    const navigate = useNavigate()
    const { toggleDialog } = useDialog()
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
              onClick={() => navigate(-1)}
              icon
              id="previous"
            >
              <ICArrowLeft className="w-7 h-7 text-primary" />
            </Button>
          </Tooltip>

          <Input
            className="mx-4"
            placeholder="Search by owner, status or lot number ..."
            onChange={onSearch}
            icon={() => <ICSearch className="w-5 h-5 text-gray-600 " />}
            size="small"
          />

          {!pathname.includes('patients') && (
            <div className="flex items-center space-x-2">
              <Tooltip content="Export">
                <Button
                  loading={exportLoading}
                  icon
                  className="peer"
                  onClick={onExport}
                >
                  <ICExport className="w-5 h-5 text-primary" />
                </Button>
              </Tooltip>
              <Tooltip content="Create">
                <Button
                  id="form"
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
            </div>
          )}
        </div>
      </Toolbar>
    )
  }
)
