import { DatePicker } from "components";
import { FC, memo } from "react";

export const ContactDate: FC<IPatientField> = memo(({ control }) => {
  return (
    <DatePicker
      label="Contact Date"
      name="contact_date"
      control={control}
      later
    />
  );
});
