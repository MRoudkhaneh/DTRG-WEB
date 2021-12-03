import { ComponentProps, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type TFormControl = {
  defaultValues?: any
  onSubmit: (state: any) => void
} & Omit<ComponentProps<'form'>, 'onSubmit'>

const Provider = FormProvider as any

export const FormControl = memo(
  ({ children, onSubmit, defaultValues, ...rest }: TFormControl) => {
    const { control, handleSubmit, setValue } = useForm({ defaultValues })

    return (
      <Provider control={control} setValue={setValue}>
        <form onSubmit={handleSubmit(onSubmit)} {...rest}>
          {children}
        </form>
      </Provider>
    )
  }
)
