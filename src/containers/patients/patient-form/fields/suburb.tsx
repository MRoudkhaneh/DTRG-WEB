import { Input } from "components";
import { FC, memo } from "react";

export const Suburb: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Suburb"
      placeholder="Enter Suburb"
      name="suburb"
      control={control}
      max={20}
      required
    />
  );
});
