import { TextArea } from "components";
import { FC, memo } from "react";

export const ExerciseDetail: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <TextArea
      label="Exercise Detail"
      name="ExerciseDetail"
      register={register}
      error={error}
      required
    />
  );
});
