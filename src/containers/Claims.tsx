import React, { ReactText } from "react";
import TableBody from "../components/table_view/TableBody";
import TableView from "../components/table_view/TableView";
import TableViewHeader from "../components/table_view/TableViewHeader";
import _random from "lodash/random";
const Claims = () => {
  const currentFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const renderCurrency = (value: ReactText) => {
    value = typeof value === "string" ? parseFloat(value) : value;
    return currentFormat.format(value);
  };
  const data = [
    {
      prog: _random(0, 1),
      description: "East Wing",
      ref: 1.0,
      qty: "20 m",
      rate: 1000,
      contract_value: 20000,
      key: "1",
    },
  ];
  const columns = [
    { label: "PROG", dataIndex: "prog" },
    { label: "REF", dataIndex: "ref" },
    {
      label: "DESCRIPTION",
      dataIndex: "description",
      style: { width: "40%", textAlign: "left" as const },
    },
    { label: "QTY", dataIndex: "qty" },
    {
      label: "RATE",
      dataIndex: "rate",
      render: (value: ReactText, _: number, data?: Record<string, any>) => {
        if (data?.key === "_total") {
          return <span className="text-bold">{value}</span>;
        }
        return renderCurrency(value);
      },
      style: { textAlign: "right" as const },
    },
    {
      label: "CONTRACT VALUE",
      dataIndex: "contract_value",
      render: (value: ReactText, _: number, data?: Record<string, any>) => {
        value = renderCurrency(value);
        if (data?.key === "_total") {
          return <span className="text-bold">{value}</span>;
        }
        return value;
      },
      style: { textAlign: "right" as const },
    },
  ];

  return (
    <div className="flex flex-col   border-2 h-auto border-black">
      <div>
        <TableViewHeader />
      </div>
      <div>
        <TableView
          columns={columns}
          dataSource={[
            ...data,
            {
              rate: "TOTAL",
              contract_value: 20000,
              key: "_total",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Claims;
