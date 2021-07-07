import { FC, memo } from 'react'
import { useHistory } from 'react-router'
import { ICPersonPlus, ICSearch } from 'icons'
import { Button, Input, Text, Toolbar, Tooltip } from 'components'

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
          />
          <Tooltip content="Create">
            <Button
              icon
              className="peer"
              onClick={() => push('/admin/patients/add')}
            >
              <ICPersonPlus className="w-8 h-8 text-secondary" />
            </Button>
          </Tooltip>
        </div>
      </Toolbar>
    )
  }
)
