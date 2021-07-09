import { Select, SelectOption } from "components";
import { FC, memo } from "react";
import { years } from "utils/constants";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Date Of Diagnosis Of T1D"
        name="date_of_diagnosis_of_t1d"
        control={control}
        setValue={setValue}
      >
        {years.map((year, index) => (
          <SelectOption key={index} value={year}>
            {year}
          </SelectOption>
        ))}
      </Select>
    );
  }
);
