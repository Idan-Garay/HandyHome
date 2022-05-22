import { Heading, Box, DataTable, Text, Tag, Button, Layer } from "grommet";
import { Navigate } from "grommet-icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  acceptRequest,
  getOrdersByEmployer,
  getOrdersForHandyman,
  validatePayment,
} from "../../../API/order";
import { AccountContext } from "../../../App";

const ColumnText = (props) => <Text weight="bold">{props.children}</Text>;

const columns = [
  {
    property: "id",
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
    header: <ColumnText>Updated At</ColumnText>,
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
  {
    property: "accept",
    header: <ColumnText></ColumnText>,
    render: (datum) => <Button width="5em" primary label="More" />,
  },
];
const Orders = ({ userId, accountType, setProfileComponentIndex }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showData, setShowData] = useState(null);
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const { accountState } = useContext(AccountContext);

  const handleOnClickRow = (e) => {
    const val = e.datum;
    setIsValid(val.status === "completed");
    setShowData(val);
    setShow(true);
  };

  const handleValidate = () => {
    let from, to;
    if (accountState.accountType === 0) {
      from = accountState.id;
      to = showData.toUserId;
    } else if (accountState.accountType === 1) {
      to = accountState.id;
      from = showData.fromUserId;
    }

    validatePayment({
      isValid: 1,
      orderId: showData.id,
      from,
      to,
      accountType: accountState.accountType,
    });
  };

  const handleRate = () => {
    navigate("/order/feedback", { state: { showData, accountType } });
    setShow(false);
  };

  const handleAccept = () => {
    acceptRequest(showData, 1);
    const idx = data.findIndex((val) => val.id === showData.id);
    if (idx) {
      data[idx].status = "accepted";
      setData([...data]);
    }
    setShow(false);
  };
  const handleReject = () => {
    const idx = data.findIndex((val) => val.id === showData.id);
    if (idx) {
      data[idx].status = "rejected";
      setData([...data]);
    }
    setShow(false);
  };

  useEffect(() => {
    setProfileComponentIndex(2);
    (async () => {
      let orders = [];
      if (accountType === 0) orders = await getOrdersByEmployer(userId);
      else if (accountType === 1) orders = await getOrdersForHandyman(userId);
      setData(orders);
    })();
  }, []);

  return (
    <Box height="xlarge">
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Box width="large" height="medium" pad="1em" gap="1em" round>
            <Heading level={3}>Order Details</Heading>
            <Box direction="row" gap="30%" margin={{ left: "2em" }}>
              <Text direction="row">
                From: <b>{showData.name}</b>
              </Text>
            </Box>
            <Box direction="row" margin={{ left: "2em" }}>
              Rate: <b>{showData.price}</b>
            </Box>
            <Box height="8em" margin={{ left: "2em" }}>
              <Text>Description:</Text>{" "}
              <Text margin={{ left: "1em" }}>
                <b>{showData.description}</b>
              </Text>
            </Box>
            {showData.status === "accepted" ? (
              <Text textAlign="center">
                Click <Text color="red">Validate</Text> button to confirm
                payment
              </Text>
            ) : null}
            <Box direction="row" justify="end" gap="small" align="center">
              {showData.status === "pending" ? (
                <>
                  <Box>
                    <Button
                      label="Reject"
                      plain
                      onClick={handleReject}
                      margin="1em"
                    />
                  </Box>
                  <Box>
                    <Button label="Accept" primary onClick={handleAccept} />
                  </Box>
                </>
              ) : (
                <>
                  {showData.status === "completed" ? (
                    <Box>
                      <Button label="Rate" primary onClick={handleRate} />
                    </Box>
                  ) : (
                    <Box margin="1em">
                      <Button
                        label="Rate"
                        plain
                        onClick={handleRate}
                        disabled
                      />
                    </Box>
                  )}
                  <Box>
                    <Button label="Validate" primary onClick={handleValidate} />
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Layer>
      )}
      <Heading
        id="orders-heading"
        level={3}
        margin={{ bottom: "small", top: "none" }}
        alignSelf="center"
      >
        Orders
      </Heading>
      <Box overflow="auto">
        <DataTable
          columns={columns}
          data={data}
          onClickRow={handleOnClickRow}
        />
      </Box>
    </Box>
  );
};

export default Orders;
