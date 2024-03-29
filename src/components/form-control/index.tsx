import { ComponentProps, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type TFormControl = {
  defaultValues?: any
  onSubmit: (state: any) => void
} & Omit<ComponentProps<'form'>, 'onSubmit'>

export const FormControl = memo(
  ({ children, onSubmit, defaultValues, ...rest }: TFormControl) => {
    const { control, handleSubmit, setValue } = useForm({ defaultValues })

    return (
      <FormProvider control={control} setValue={setValue}>
        <form onSubmit={handleSubmit(onSubmit)} {...rest}>
          {children}
        </form>
      </FormProvider>
    )
  }
)
