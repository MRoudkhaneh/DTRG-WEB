import { memo } from 'react'
import { classNames } from 'utils'

export const PatientAssetsDetails = memo(({ item }: { item?: any }) => {
  return (
    <td
      className={classNames(
        'w-full ',
        item && item.image && item.image.url && 'h-[500px]'
      )}
    >
      {item && item.image && item.image.url ? (
        <img
          className="w-[440px] h-[490px] rounded mx-auto "
          src={item.image.url}
        />
      ) : (
        <span className=" text-gray-100 text-2xl flex  items-center justify-center py-10">
          No image was uploaded
        </span>
      )}
    </td>
  )
})
