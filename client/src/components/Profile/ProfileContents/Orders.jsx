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
  const [childIdx, setChildIdx] = useState(0);

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

    const result = validatePayment({
      isValid: 1,
      orderId: showData.id,
      from,
      to,
      accountType: accountState.accountType,
    }); // result: {status: <String>}
    if (result) {
      if (result.status === "completed")
        setShowData({ ...showData, status: result.status });
    }
    setShow(false);
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
    setShowData({ ...showData, status: "accepted" });
    setChildIdx(1);
    setShow(false);
  };
  const handleReject = () => {
    acceptRequest(showData, 0);
    const idx = data.findIndex((val) => val.id === showData.id);
    if (idx) {
      data[idx].status = "rejected";
      setData([...data]);
    }
    setShowData({ ...showData, status: "rejected" });
    setChildIdx(1);
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

  useEffect(() => {
    if (showData) {
      let idx = 0;
      if (showData.status === "rejected") idx = 1;
      else if (showData.status === "accepted") idx = 2;

      setChildIdx(idx);
    }
  }, [showData]);

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
                Click <Text color="red">Complete Order</Text> button to confirm
                payment
              </Text>
            ) : null}
            <Box direction="row" justify="end" gap="small" align="center">
              <ShowButtons childIdx={childIdx}>
                <PendingOrderButtons
                  handleFns={{ handleAccept, handleReject }}
                  accountType={accountType}
                  idx={0}
                />
                <RejectedOrder idx={1} />
                <CompletedOrderButtons
                  status={showData.status}
                  handleFns={{ handleRate, handleValidate }}
                  idx={2}
                />
              </ShowButtons>
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
          sort={{ property: "updatedAt", direction: "desc" }}
          columns={columns}
          data={data}
          onClickRow={handleOnClickRow}
        />
      </Box>
    </Box>
  );
};

const ShowButtons = ({ children, childIdx }) => {
  const ChosenComponent = children.find((ch) => {
    return ch.props.idx === childIdx;
  });

  return ChosenComponent;
};

const RejectedOrder = () => {
  return (
    <>
      <Text> Order is rejected</Text>
    </>
  );
};

const PendingOrderButtons = ({ handleFns, accountType }) => {
  const { handleAccept, handleReject } = handleFns;
  return (
    <>
      {accountType === 1 ? (
        <>
          <Box>
            <Button label="Reject" plain onClick={handleReject} margin="1em" />
          </Box>
          <Box>
            <Button label="Accept" primary onClick={handleAccept} />
          </Box>
        </>
      ) : (
        <Text>Order is waiting to be accepted...</Text>
      )}
    </>
  );
};

const CompletedOrderButtons = ({ status, handleFns }) => {
  const { handleRate, handleValidate } = handleFns;

  return (
    <>
      {status === "accepted" && (
        <>
          {status === "completed" ? (
            <Box>
              <Button label="Rate" primary onClick={handleRate} />
            </Box>
          ) : (
            <>
              <Box margin="1em">
                <Button label="Rate" plain onClick={handleRate} disabled />
              </Box>
              <Box>
                <Button
                  label="Complete Order"
                  primary
                  onClick={handleValidate}
                />
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Orders;
