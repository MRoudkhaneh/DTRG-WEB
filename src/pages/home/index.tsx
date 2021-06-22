import { useEffect } from "react";
import { useHistory } from "react-router";

const View = () => {
  const { push } = useHistory();
  useEffect(() => {
    push("/admin/patients");
  }, []);

  return <div className="w-full"></div>;
};

export default View;
