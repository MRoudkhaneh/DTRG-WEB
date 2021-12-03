import { memo } from 'react'
import { FormSelect } from 'components/form-select'

export const CurrentStudy = memo(() => {
  return (
    <FormSelect
      label="Current Study"
      name="current_study"
      required
      className="mt-6"
      options={[
        { id: 'Biocapillary Pilot', title: 'Biocapillary Pilot' },
        { id: 'All in One', title: 'All in One' },
        { id: 'Glysens PAVE', title: 'Glysens PAVE' },
        { id: 'Glysens FREE', title: 'Glysens FREE' },
        { id: 'Additional Signals PWOD', title: 'Additional Signals PWOD' },
        { id: 'Fiasp Original V1', title: 'Fiasp Original V1' },
        { id: 'Fiasp Extension V2', title: 'Fiasp Extension V2' },
        { id: 'Clear', title: 'Clear' },
        { id: 'FAME 1 EYE', title: 'FAME 1 EYE' },
        { id: 'MEWS', title: 'MEWS' },
        { id: 'Serodus', title: 'Serodus' },
        { id: 'FLASH', title: 'FLASH' },
        { id: 'Insulet', title: 'Insulet' },
        { id: 'Zeus', title: 'Zeus' },
        {
          id: 'Not currently enrolled in a study',
          title: 'Not currently enrolled in a study',
        },
        { id: 'Other', title: 'Other' },
      ]}
    />
  )
})
