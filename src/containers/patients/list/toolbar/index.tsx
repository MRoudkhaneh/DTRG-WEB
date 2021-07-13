import { FC, memo } from 'react'
import { useHistory } from 'react-router-dom'
import { ICPersonPlus } from 'icons/person-plus'
import { ICSearch } from 'icons/search'
import { Button } from 'components/button'
import { Toolbar } from 'components/toolbar'
import { Input } from 'components/input'
import { Text } from 'components/text'
import { Tooltip } from 'components/tooltip'

export const PatientListToolbar: FC<{ onSearch?: any }> = memo(
  ({ onSearch }) => {
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
          <Input
            className="mr-4"
            placeholder="Search ..."
            onChange={onSearch}
            icon={() => <ICSearch className="w-5 h-5 text-gray-600 " />}
            size="small"
          />
          <Tooltip content="Create">
            <Button
              icon
              className="peer"
              onClick={() => push('/admin/patients/add')}
            >
              <ICPersonPlus className="w-8 h-8 text-primary" />
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    )
  }
)
