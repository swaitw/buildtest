import React from "react";
import { useRecoilValue } from "recoil";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import { tableViewStateColumnsSelector } from "./tableViewStates";

const TableHeader = () => {
  const columns = useRecoilValue(tableViewStateColumnsSelector);
  return (
    <TableRow>
      {columns.map((column) => {
        return (
          <TableCell key={column.dataIndex} style={column.style}>
            {column.label}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableHeader;
