import { FC, memo } from 'react'

export const PatientAssetsDetails: FC<{ item?: any }> = memo(({ item }) => {
  return (
    <div className="w-full h-[500px]">
      <img
        className="w-[440px] h-[490px] rounded mx-auto "
        src={item.image.url || 'https://picsum.photos/200/300'}
      />
    </div>
  )
})
