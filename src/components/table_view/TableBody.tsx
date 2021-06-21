import React from "react";
import { useRecoilValue } from "recoil";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import {
  tableViewStateColumnsSelector,
  tableViewStateDataSourceSelector,
} from "./tableViewStates";

const TableBody = () => {
  const dataSource = useRecoilValue(tableViewStateDataSourceSelector);
  const columns = useRecoilValue(tableViewStateColumnsSelector);

  return (
    <div className="table-row-group">
      {dataSource.map((row) => {
        return (
          <TableRow key={row.key}>
            {columns.map((column, index) => {
              const value = row[column.dataIndex] || "";
              return (
                <TableCell
                  key={`${row.key}-${column.dataIndex}`}
                  style={column.style || {}}
                >
                  {column.render ? column.render(value, index, row) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </div>
  );
};

export default TableBody;
