import { FC, memo } from 'react'
import { useHistory } from 'react-router-dom'
import { ICPersonPlus } from 'icons/person-plus'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

export const PatientListToolbar: FC<{ onSearch?: any; search?: any }> = memo(
  ({ onSearch, search }) => {
    const { push } = useHistory()
    return (
      <Toolbar>
        <Text
          size="header"
          className="w-3/4 flex flex-col items-start "
          slot="start"
        >
          Patients
        </Text>
        <div className="flex items-center w-1/4 " slot="end">
          <input
            className=" w-full h-8 text-[13px] mr-4 px-2  rounded focus:outline-none focus:shadow  text-gray-900 bg-white placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700 border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600  "
            placeholder="Search here ..."
            onChange={onSearch}
            value={search}
          />
          <Tooltip content="Create">
            <Button
              icon
              className="peer"
              onClick={() => push('/admin/patients/form')}
            >
              <ICPersonPlus className="w-8 h-8 text-primary" />
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    )
  }
)
