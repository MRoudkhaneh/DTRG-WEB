import { Switch } from "components/switch";
import { FC, memo } from "react";

export const HadFeetNeuropathy: FC<IPatientField> = memo(({ control }) => {
  return (
    <Switch label="Foot neuropathy?" name="foot_neuropathy" control={control} />
  );
});
