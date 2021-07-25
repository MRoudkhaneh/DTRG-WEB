import { Input } from "components/input";
import { FC, memo } from "react";

export const EmailAddress: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Email Address"
      placeholder="Enter Email Address"
      name="email"
      type="email"
      control={control}
      max={64}
      required
    />
  );
});
