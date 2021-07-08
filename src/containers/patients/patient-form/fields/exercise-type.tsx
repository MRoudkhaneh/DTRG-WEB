import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const ExerciseType: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Exercise Type"
      name="exercise_type"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="Casual">Casual</SelectOption>
      <SelectOption value="Structured">Structured</SelectOption>
    </Select>
  );
});
