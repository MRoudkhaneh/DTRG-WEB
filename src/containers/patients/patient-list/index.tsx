import { memo } from "react";
import { Table } from "components";

import { usePatientList } from "./use-patient-list";
import { PatientListToolbar } from "./patient-list-toolbar";
import { PatientListDetails } from "./patient-list-details";

export const PatientList = memo(() => {
  const { data, columns, onPaginate, isLoading, page, onSearch } =
    usePatientList();

  return (
    <div className="w-full">
      <PatientListToolbar onSearch={onSearch} />
      <Table
        className="w-full my-10"
        data={data}
        total={4}
        page={page}
        columns={columns}
        onPaginate={onPaginate}
        loading={isLoading}
        expand={(item) => <PatientListDetails item={item} />}
      />
    </div>
  );
});
