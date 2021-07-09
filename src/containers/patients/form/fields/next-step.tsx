import { Input } from "components";
import { FC, memo } from "react";

export const NextStep: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Next Steps"
      placeholder="Enter Next Steps"
      name="next_step"
      control={control}
    />
  );
});
