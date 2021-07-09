import { Input } from "components";
import { FC, memo } from "react";

export const PhoneNumber: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Phone Number (Mobile)"
      placeholder="Enter Phone Number"
      name="phone_number"
      control={control}
      max={20}
      required
    />
  );
});
