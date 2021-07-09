import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const InfusionLineType: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Infusion Line Type"
        name="infusion_line_type"
        control={control}
        setValue={setValue}
      >
        <SelectOption value=" 90 Degree">90 Degree</SelectOption>
        <SelectOption value="45 Degree">45 Degree</SelectOption>
        <SelectOption value="Metal">Metal</SelectOption>
      </Select>
    );
  }
);
