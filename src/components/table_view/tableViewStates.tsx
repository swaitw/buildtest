import { atom, selector } from "recoil";
import { TableViewColumn, TableViewRowData, TableViewState } from "./types";
export const defaultTableViewState: TableViewState = {
  columns: [],
  dataSource: [],
};
export const tableViewState = atom<TableViewState>({
  key: "tableViewState",
  default: defaultTableViewState,
});

export const tableViewStateColumnsSelector = selector<TableViewColumn[]>({
  key: "tableViewStateColumnsSelector",
  get({ get }) {
    return get(tableViewState).columns;
  },
  set({ set }, columns) {
    set(tableViewState, (prev) => {
      return {
        ...prev,
        columns,
      } as TableViewState;
    });
  },
});

export const tableViewStateDataSourceSelector = selector<TableViewRowData[]>({
  key: "tableViewStateDataSourceSelector",
  get({ get }) {
    return get(tableViewState).dataSource;
  },
  set({ set }, dataSource) {
    set(tableViewState, (prev) => {
      return {
        ...prev,
        dataSource,
      } as TableViewState;
    });
  },
});
