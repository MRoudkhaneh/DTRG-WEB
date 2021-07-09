import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentStudy: FC<IPatientField> = memo(({ control, setValue }) => {
  return (
    <Select
      label="Current Study"
      name="current_study"
      control={control}
      required
      setValue={setValue}
    >
      <SelectOption value="Biocapillary Pilot">Biocapillary Pilot</SelectOption>
      <SelectOption value="All in One">All in One</SelectOption>
      <SelectOption value="Glysens PAVE">Glysens PAVE</SelectOption>
      <SelectOption value="Glysens FREE">Glysens FREE</SelectOption>
      <SelectOption value="Additional Signals PWOD">
        Additional Signals PWOD
      </SelectOption>
      <SelectOption value="Fiasp Original V1">Fiasp Original V1</SelectOption>
      <SelectOption value="Fiasp Extension V2">Fiasp Extension V2</SelectOption>
      <SelectOption value="Clear">Clear</SelectOption>
      <SelectOption value="FAME 1 EYE">FAME 1 EYE</SelectOption>
      <SelectOption value="MEWS">MEWS</SelectOption>
      <SelectOption value="Serodus">Serodus</SelectOption>
      <SelectOption value="FLASH">FLASH</SelectOption>
      <SelectOption value="Insulet">Insulet</SelectOption>
      <SelectOption value="Zeus">Zeus</SelectOption>
      <SelectOption value="Other">Other</SelectOption>
    </Select>
  );
});
