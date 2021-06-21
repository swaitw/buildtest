import React from "react";
import withRecoil from "../../utils/recoil/withRecoil";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { tableViewState } from "./tableViewStates";
import { TableViewColumn, TableViewRowData } from "./types";

export type TableViewProps = {
  columns: TableViewColumn[];
  dataSource: TableViewRowData[];
};
const TableView = (props: TableViewProps) => {
  return (
    <div className="table w-full h-auto ">
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default withRecoil<TableViewProps>({
  initializeState: ({ set }, props: TableViewProps) => {
    set(tableViewState, (prev) => {
      return {
        ...prev,
        columns: props.columns,
        dataSource: props.dataSource,
      };
    });
  },
})(TableView);
