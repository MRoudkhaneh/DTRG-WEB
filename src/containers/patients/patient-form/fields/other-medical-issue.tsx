import { TextArea } from "components";
import { FC, memo } from "react";

export const OtherMedicalIssue: FC<IPatientField> = memo(({ control }) => {
  return (
    <TextArea
      label="Other Medical Issue"
      placeholder="Enter Other Medical Issue"
      name="other_medical_issue"
      control={control}
    />
  );
});
