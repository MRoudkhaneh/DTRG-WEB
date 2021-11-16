import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'
import { ICExport } from 'icons/export'
import { ICPlus } from 'icons/plus'
import { useUi } from 'hooks/use-ui'
import { ICFilter } from 'icons/filter'
import { Menu } from '@headlessui/react'
import { ICFilterOutline } from 'icons/filter-outline'
import { ICEraser } from 'icons/eraser'
import { Link } from 'react-router-dom'

type TPatientsToolbar = {
  onSearch?: any
  search?: any
  exportLoading?: boolean
  onExport?: any
  onResetFilter?: any
}

export const PatientListToolbar = memo(
  ({
    onSearch,
    search,
    exportLoading,
    onExport,
    onResetFilter,
  }: TPatientsToolbar) => {
    const { toggleDialog } = useUi()

    return (
      <Toolbar>
        <Text
          size="header"
          className="w-3/4 flex flex-col items-start "
          slot="start"
        >
          Patients
        </Text>
        <div className="flex items-center w-1/2 lg:w-1/3 space-x-2" slot="end">
          <input
            className=" w-full h-8 text-[13px] mr-4 px-2  rounded focus:outline-none focus:shadow  text-gray-900 bg-white placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700 border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600  "
            placeholder="Search for patient name"
            onChange={onSearch}
            value={search ?? ''}
          />

          <Menu as="div" className="relative">
            <Menu.Button>
              <Tooltip content="Advanced search">
                <ICFilterOutline className="w-5 h-5 text-primary mr-2 -mb-0.5 peer " />
              </Tooltip>
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute right-0  flex flex-col space-y-2 mt-2">
              <Menu.Item>
                {({ active }) => (
                  <Tooltip content="Filter">
                    <Button
                      className="peer"
                      onClick={() =>
                        toggleDialog({
                          open: true,
                          type: 'patient-advance-search',
                        })
                      }
                    >
                      <ICFilter className="w-5 h-5 text-primary " />
                    </Button>
                  </Tooltip>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Tooltip content="Reset">
                    <Button className="peer" onClick={onResetFilter}>
                      <ICEraser className="w-5 h-5 text-primary " />
                    </Button>
                  </Tooltip>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

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
          <Link to="/admin/patients/form">
            <Tooltip content="Create">
              <Button icon className="peer">
                <ICPlus className="w-8 h-8 text-primary" />
              </Button>
            </Tooltip>
          </Link>
        </div>
      </Toolbar>
    )
  }
)
