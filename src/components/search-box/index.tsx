import { useService } from 'hooks/use-service'
import { useValidation } from 'hooks/use-validation'
import { memo, useState } from 'react'
import { Controller } from 'react-hook-form'
import { SearchBoxCore } from './search-box-core'

export const SearchBox = memo((props: ISearch) => {
  const [params, setParams] = useState({ [props.paramKey]: null })
  const [isOpen, setIsOpen] = useState(false)

  const { useGet } = useService()
  const { validate } = useValidation({ required: props.required })

  const { data, isLoading } = useGet({
    key: [props.url, params],
    url: props.url,
    enabled: isOpen,
    refetchOnWindowFocus: false,
  })

  if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        rules={{ validate }}
        render={({
          field: { onChange: fieldChange, value: fieldValue },
          fieldState: { error: fieldError },
        }) => (
          <SearchBoxCore
            value={fieldValue}
            onChange={fieldChange}
            error={fieldError}
            data={data}
            isLoading={isLoading}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setParams={setParams}
            placeholder={props.placeholder}
            className={props.className}
            label={props.label}
            paramKey={props.paramKey}
            valueKey={props.valueKey}
            params={params}
          />
        )}
      />
    )
  return (
    <SearchBoxCore
      {...props}
      data={data}
      isLoading={isLoading}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setParams={setParams}
    />
  )
})
