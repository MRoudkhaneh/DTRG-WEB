import { TextArea } from 'components/text-area'
import { FC, memo } from 'react'

export const DiscussionHeld = memo(({ control }: IPatientField) => {
  return (
    <TextArea
      label="Discussion Held And What Was Discussed"
      placeholder="Enter Discussion Held And What Was Discussed"
      name="discussion_held_and_what_discussed"
      control={control}
    />
  )
})
