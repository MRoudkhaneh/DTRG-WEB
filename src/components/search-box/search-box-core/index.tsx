import { FC, useMemo } from 'react'
import { Input } from 'components/input'
import { InputLabel } from 'components/input/input-label'
import { classNames } from 'utils/classes'
import { SearchBoxDropBox } from '../search-drop-box'
import { SearchBoxLoading } from '../search-loading.tsx'
import { SearchBoxNoItems } from '../search-no-items'

export const SearchBoxCore: FC<ISearch> = (props) => {
  const placeholder = useMemo(
    () =>
      (props.value ? props.value.first_name : '') +
      ' ' +
      (props.value ? props.value.surename || '' : ''),
    [props.value]
  )
  return (
    <div
      className={classNames(
        'w-full flex flex-col items-start relative',
        props.className
      )}
    >
      <InputLabel label={props.label} />
      <Input
        placeholder={placeholder}
        error={props.error}
        onFocus={() => props.setIsOpen(true)}
        onChange={(e) => props.setParams({ search: e.target.value })}
        value={props.params.search}
      />

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
