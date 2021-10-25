import { FC, memo } from 'react'
import { Controller } from 'react-hook-form'

import { SwitchCore } from './switch-core'

export const Switch = memo((props: ISwitch) => {
  if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <SwitchCore onChange={onChange} checked={value} {...props} />
        )}
      />
    )
  else return <SwitchCore {...props} />
})
