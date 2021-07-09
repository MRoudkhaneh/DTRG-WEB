import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PreferedContactMethod: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Prefered Contact Method"
        name="preferred_contact_method"
        control={control}
        setValue={setValue}
        required
      >
        <SelectOption value="Email">Email</SelectOption>
        <SelectOption value="Phone">Phone</SelectOption>
        <SelectOption value="Either">Either</SelectOption>
      </Select>
    );
  }
);
