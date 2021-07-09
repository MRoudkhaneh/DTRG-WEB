import { Button } from "components/button";

export const PatientFormSubmit = ({ loading }) => {
  return (
    <Button
      type="submit"
      className=" w-1/2 md:w-1/6 h-12 my-10 ml-auto bg-pink-700 text-white"
      loading={loading}
    >
      Save Patient
    </Button>
  );
};
