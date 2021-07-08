import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PhoneType: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Phone Type"
      name="phone_type"
      control={control}
      setValue={setValue}
      multiple
      required
    >
      <SelectOption value="Android">Android</SelectOption>
      <SelectOption value=" IOS">IOS</SelectOption>
      <SelectOption value="Windows">Windows</SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  );
});
