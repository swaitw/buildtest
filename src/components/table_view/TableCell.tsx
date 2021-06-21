import React, { CSSProperties, FC } from "react";
type TableCellProps = {
  style?: Omit<CSSProperties, "display">;
};
const TableCell: FC<TableCellProps> = (props) => {
  const { style = {} } = props;
  return (
    <div
      className="table-cell px-3 py-4 border-b border-b-gray-500 "
      style={style}
    >
      {props.children}
    </div>
  );
};

export default TableCell;
