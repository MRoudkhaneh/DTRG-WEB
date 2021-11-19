import { Button } from 'components/button'
import { memo } from 'react'

export const AssetSubmit = memo(({ isLoading }: { isLoading: boolean }) => {
  return (
    <Button
      type="submit"
      loading={isLoading}
      icon
      className=" w-1/2 mx-auto h-12 mt-14 mb-10 text-white shadow-blue bg-secondary dark:bg-primary"
    >
      Save Asset
    </Button>
  )
})
