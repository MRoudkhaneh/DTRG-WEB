import { render, screen } from '@testing-library/react'
import event from '@testing-library/user-event'
import { FormCheckBox } from 'components/form-checkbox'
import { FormControl } from 'components/form-control'

describe('Form Checkbox component', () => {
  it('Should render chebox and check properly', () => {
    render(
      <FormControl onSubmit={() => {}}>
        <FormCheckBox name="input" label="Some label" />
      </FormControl>
    )
    const checkbox = screen.getByLabelText(/some label/i)
    expect(checkbox).not.toBeChecked()
    event.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
