import { Input } from "components";
import { FC, memo } from "react";

export const DiabeticMedicalHistory: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="Diabetic & Medical History"
      name="DiabeticHistory"
      control={control}
    />
  );
});
