import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PatientStatus: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Patient Status"
        name="patient_status"
        control={control}
        setValue={setValue}
        required
      >
        <SelectOption value="Approached - ineligible">
          Approached - ineligible
        </SelectOption>
        <SelectOption value="Approached - declined">
          Approached - declined
        </SelectOption>
        <SelectOption value="Approached - recruited">
          Approached - recruited
        </SelectOption>
        <SelectOption value="Screening - ineligible">
          Screening - ineligible
        </SelectOption>
        <SelectOption value="Screening - drop out">
          Screening - drop out
        </SelectOption>
        <SelectOption value="Consented and Active">
          Consented and Active
        </SelectOption>
        <SelectOption value="Drop out">Drop out</SelectOption>
      </Select>
    );
  }
);
