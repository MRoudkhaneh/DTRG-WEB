import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentInsulinUse: FC<IPatientField> = memo(
  ({ control, setValue }) => {
    return (
      <Select
        label="Current Insulin Use"
        name="current_insulin_use"
        control={control}
        setValue={setValue}
        multiple
      >
        <SelectOption value="Novorapid">Novorapid</SelectOption>
        <SelectOption value="Humalog">Humalog</SelectOption>
        <SelectOption value="Levemir">Levemir</SelectOption>
        <SelectOption value="Lantus">Lantus</SelectOption>
        <SelectOption value="Fiasp">Fiasp</SelectOption>
        <SelectOption value="Toujeo">Toujeo</SelectOption>
        <SelectOption value=" Tjoa">Tjoa</SelectOption>
        <SelectOption value="Solostar">Solostar</SelectOption>
        <SelectOption value="Ryzodeg">Ryzodeg</SelectOption>
        <SelectOption value="optisulin">Optisulin</SelectOption>
      </Select>
    );
  }
);
