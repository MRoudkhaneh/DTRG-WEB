import { FC, memo } from "react";
import { Pagination } from "components";
import { classNames } from "utils";

import { TableHead } from "./table-head";
import { TableRow } from "./table-row";

export const Table: FC<ITable> = memo(
  ({ className, columns, data, expand, onPaginate, loading, page, total }) => {
    return (
      <div
        className={classNames("w-full flex flex-col items-center", className)}
        slot="wrapper"
      >
        <TableHead columns={columns} />

        {loading && (!data || data.length === 0)
          ? Array.from(new Array(10)).map((item, index) => (
              <TableRow
                key={index}
                item={item}
                columns={columns}
                index={index}
                expand={expand}
                loading={loading}
              />
            ))
          : data &&
            (data || []).map((item, index) => (
              <TableRow
                key={index}
                item={item}
                columns={columns}
                index={index}
                expand={expand}
                loading={loading}
              />
            ))}

        {data && onPaginate && (
          <Pagination
            className="mt-10"
            total={total}
            page={page === null ? 1 : page}
            onPaginate={onPaginate}
            disabled={loading}
          />
        )}
      </div>
    );
  }
);
