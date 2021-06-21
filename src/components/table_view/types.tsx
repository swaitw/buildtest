import { CSSProperties, ReactText } from "react";

export type TableViewRowData<
  TData extends Record<string, any> = Record<string, any>
> = TData & {
  key: string;
};

export type TableViewColumn<
  T extends Record<string, any> = Record<string, any>
> = {
  dataIndex: string;
  label: string;
  render?: (
    value: ReactText,
    index: number,
    data?: TableViewRowData<T>
  ) => ReactText | JSX.Element;
  style?: Omit<CSSProperties, "display">;
};

export type TableViewState<
  T extends Record<string, any> = Record<string, any>
> = {
  columns: TableViewColumn[];
  dataSource: TableViewRowData<T>[];
};
