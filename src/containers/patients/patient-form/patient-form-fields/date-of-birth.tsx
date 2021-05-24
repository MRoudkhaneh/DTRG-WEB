import { DatePicker } from "components";
import { FC, memo } from "react";

export const DateOfBirth: FC<IPatientField> = memo(
  ({ error, state, control,  }) => {
    return (
      <DatePicker
        label="Date Of Birth"
        name="date_of_birth"
        control={control}
        error={error}
        value={state}
        required
      />
    );
  }
);
