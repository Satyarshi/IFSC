import React from "react";
import { Table } from "antd";

const IfscTable = ({ data }) => {
  const columns = [
    {
      title: "IFSC Code",
      dataIndex: "ifsc",
      key: "ifsc_code",
      render: (text) => <span className="ifsc-code">{text}</span>,
    },
    {
      title: "Bank",
      dataIndex: "bank",
      key: "bank",
      render: (text) => <span className="bank">{text}</span>,
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
      render: (text) => <span className="branch">{text}</span>,
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="ifsc_code"
      pagination={false}
      style={{ marginTop: 20, marginBottom:20 }}
    />
  );
};

export default IfscTable;
