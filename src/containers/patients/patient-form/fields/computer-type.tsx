import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const ComputerType: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Computer Type"
        name="computer_type"
        control={control}
        value={state}
        setValue={setValue}
      >
        <SelectOption value="Windows" selected={state === "Windows"}>
          Windows
        </SelectOption>
        <SelectOption value="Mac" selected={state === "Mac"}>
          Mac
        </SelectOption>
        <SelectOption value="Both" selected={state === "Both"}>
          Both
        </SelectOption>
      </Select>
    );
  }
);
