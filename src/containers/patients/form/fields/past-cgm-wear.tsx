import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PastCGMWear: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Past CGM Wear"
      name="past_cgm_wear"
      control={control}
      setValue={setValue}
    >
      <SelectOption value="Libre">Libre</SelectOption>
      <SelectOption value="Guardian Connect">Guardian Connect</SelectOption>
      <SelectOption value=" Guardian Sensor 3">Guardian Sensor 3</SelectOption>
      <SelectOption value=" Dexcom G5">Dexcom G5</SelectOption>
      <SelectOption value=" Dexcom G6">Dexcom G6</SelectOption>
    </Select>
  );
});
