import { Input } from "components";
import { FC, memo } from "react";

export const State: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="State"
      placeholder="Enter State"
      name="state"
      control={control}
      max={10}
      required
    />
  );
});
