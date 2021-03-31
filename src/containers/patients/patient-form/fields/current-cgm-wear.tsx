import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentCGMWear: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Select
      label="Current CGM Wear"
      name="CurrentCGMWear"
      control={control}
      value={state}
    >
      <SelectOption value="Libre" selected={state === "Libre"}>
        Libre
      </SelectOption>
      <SelectOption
        value="Guardian Connect"
        selected={state === "Guardian Connect"}
      >
        Guardian Connect
      </SelectOption>
      <SelectOption
        value=" Guardian Sensor 3"
        selected={state === " Guardian Sensor 3"}
      >
        Guardian Sensor 3
      </SelectOption>
      <SelectOption value=" Dexcom G5" selected={state === " Dexcom G5"}>
        Dexcom G5
      </SelectOption>
      <SelectOption value=" Dexcom G6" selected={state === " Dexcom G6"}>
        Dexcom G6
      </SelectOption>
    </Select>
  );
});
