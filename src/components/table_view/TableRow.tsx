import React, { FC } from "react";

const TableRow: FC = (props) => {
  return <div className="table-row">{props.children}</div>;
};

export default TableRow;
