import { Error } from 'components/error'
import { Input } from 'components/input'
import { InputLabel } from 'components/input/input-label'
import { FC } from 'react'
import { classNames } from 'utils/classes'
import { SearchBoxDropBox } from '../search-drop-box'
import { SearchBoxLoading } from '../search-loading.tsx'
import { SearchBoxNoItems } from '../search-no-items'

export const SearchBoxCore: FC<ISearch> = (props) => {
  return (
    <div
      className={classNames(
        'w-full flex flex-col items-start relative',
        props.className
      )}
    >
      <InputLabel label={props.label} />
      <Input
        placeholder={
          props.value && props.value[props.valueKey]
            ? props.value[props.valueKey]
            : props.placeholder
        }
        onFocus={() => props.setIsOpen(true)}
        onChange={(e) => props.setParams({ [props.paramKey]: e.target.value })}
        error={props.error}
      />
      {/* <Error
        error={props.error}
        className={classNames(
          'absolute left-0',
          props.label ? ' top-[78px]' : 'top-[45px]'
        )}
      /> */}
      {props.isOpen && props.isLoading ? (
        <SearchBoxLoading />
      ) : props.isOpen &&
        props.data &&
        props.data.data &&
        props.data.data.results &&
        props.data.data.results.length ? (
        <SearchBoxDropBox {...props} />
      ) : (
        props.isOpen && <SearchBoxNoItems />
      )}
    </div>
  )
}
