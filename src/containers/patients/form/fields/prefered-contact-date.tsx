import { DatePicker } from "components";
import { FC, memo } from "react";

export const PreferedContactDate: FC<IPatientField> = memo(({ control }) => {
  return (
    <DatePicker
      label="Prefered Contact Date"
      name="preferred_contact_time"
      control={control}
      required
    />
  );
});
