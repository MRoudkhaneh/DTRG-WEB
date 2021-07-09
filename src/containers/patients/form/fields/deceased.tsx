import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Deceased: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Deceased"
      name="deceased"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="No">No</SelectOption>
      <SelectOption value="Yes">Yes</SelectOption>
    </Select>
  );
});
