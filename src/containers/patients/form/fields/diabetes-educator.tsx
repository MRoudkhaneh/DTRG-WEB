import { Input } from "components";
import { FC, memo } from "react";

export const DiabetesEducator: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Diabetes Educator"
      placeholder="Enter Diabetes Educator"
      name="diabetes_educator"
      control={control}
      max={50}
    />
  );
});
