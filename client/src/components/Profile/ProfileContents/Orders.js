import { Heading, Box, DataTable, Text, Tag } from "grommet";
import React from "react";

const ColumnText = (props) => <Text weight="bold">{props.children}</Text>;

const data = [
  {
    orderId: 1,
    name: "Moon",
    contactNo: "09963232112",
    updatedAt: "June 01, 2022 06:00 AM",
    status: "completed",
  },
];
const columns = [
  {
    property: "orderId",
    header: <ColumnText>Order ID</ColumnText>,
    primary: true,
  },
  { property: "name", header: <ColumnText>Name</ColumnText> },
  {
    property: "contactNo",
    header: <ColumnText>Contact Number</ColumnText>,
  },
  {
    property: "updatedAt",
    header: <ColumnText>Date Completed</ColumnText>,
  },
  {
    property: "status",
    header: <ColumnText>Status</ColumnText>,
    render: (datum) => (
      <Box width="xsmall">
        <Tag value={datum.status} pad=".1em" />
      </Box>
    ),
  },
];

const Orders = () => {
  return (
    <div>
      <Heading
        id="orders-heading"
        level={3}
        margin={{ bottom: "small", top: "none" }}
        alignSelf="center"
      >
        Orders
      </Heading>
      <Box overflow="auto">
        <DataTable columns={columns} data={data} />
      </Box>
    </div>
  );
};

export default Orders;
