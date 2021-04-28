import { Input } from "components/input";
import { FC, memo } from "react";

export const EmailAddress: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Email Address"
        name="email"
        type="email"
        register={register}
        error={error}
        value={state}
        max={64}
        required
      />
    );
  }
);
