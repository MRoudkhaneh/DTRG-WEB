import { memo } from 'react'

export const PreviousStudyLoading = memo(() => {
  return (
    <div className="w-1/4 h-full flex flex-col space-y-5 animate-pulse">
      <div className="w-1/2 self-start h-5 rounded bg-gray-700 mb-6" />
      {Array.from({ length: 16 }).map((_, index) => (
        <div className="w-full flex items-end space-x-4" key={index}>
          <div className="w-6 h-6 bg-gray-700 rounded" />
          <div className="w-2/3 h-3 rounded bg-gray-700" />
        </div>
      ))}
      <div className=" w-full h-10 my-10 bg-gray-700 rounded" />
    </div>
  )
})
