import { Button } from 'components/button'

export const InteractionSubmit = () => {
  return (
    <Button
      type="submit"
      icon
      className=" w-full h-12 my-10 text-white shadow-blue bg-secondary dark:bg-primary"
    >
      Save Interaction
    </Button>
  )
}
