import { Button } from 'components/button'

export const PatientFormSubmit = ({ loading }) => {
  return (
    <Button
      icon
      type="submit"
      className=" w-1/2 md:w-1/6 h-12 my-10 ml-auto text-white shadow-blue bg-secondary dark:bg-primary"
      loading={loading}
    >
      Save Patient
    </Button>
  )
}
