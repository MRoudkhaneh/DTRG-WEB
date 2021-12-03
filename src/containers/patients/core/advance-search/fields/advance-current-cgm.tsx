import { FormSelect } from 'components/form-select'

export const AdvanceCurrentCgm = () => {
  return (
    <FormSelect
      label="Current CGM Wear"
      name="current_cgm_wear"
      options={[
        { id: 'Libre', title: 'Libre' },
        { id: 'Guardian Connect', title: 'Guardian Connect' },
        { id: 'Guardian Sensor 3', title: 'Guardian Sensor 3' },
        { id: 'Dexcom G5', title: 'Dexcom G5' },
        { id: 'Dexcom G6', title: 'Dexcom G6' },
        { id: 'Libre 2', title: 'Libre 2' },
        { id: 'None', title: 'None' },
      ]}
    />
  )
}
