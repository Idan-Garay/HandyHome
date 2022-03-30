import React from "react";
import styled from "styled-components";

const DetailLineDiv = styled.div`
  & > .lineLabel {
    color: #c4c4c4;
  }
  & > .lineValue {
    color: #41518c;
  }
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  max-width: 20em;
`;

const DetailTitle = styled.div`
  display: flex;
  & > h3 {
    color: #41518c;
    margin-right: 2em;
  }
  margin-bottom: 0.5em;
`;

const OrderStatus = styled.div`
  color: white;
  background-color: #0acf83;
  border-radius: 8px;
  font-size: small;
  font-weight: bolder;
  padding: 0.4em 0.8em;
  max-height: 100%;
`;

const OrderDetailsFrame = styled.div`
  max-width: 20em;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4em 0.6em;
`;

const OrderDetails = () => {
  const detailsTotal = [
    { lineLabel: "Ordered by", lineValue: "nameA" },
    { lineLabel: "Delivery Date", lineValue: "Feb 27, 1:04 AM" },
    { lineLabel: "Total Price", lineValue: "P 1200" },
    { lineLabel: "Order number", lineValue: "#F01DC3E3F745" },
  ];
  return (
    <OrderDetailsFrame>
      <DetailTitle>
        <h3>OrderDetails</h3>
        <OrderStatus> Completed</OrderStatus>
      </DetailTitle>

      {detailsTotal.map(({ lineLabel, lineValue }, idx) => (
        <DetailLineDiv key={"detail" + idx}>
          <p className="lineLabel">{lineLabel}</p>
          <p className="lineValue">{lineValue}</p>
        </DetailLineDiv>
      ))}
    </OrderDetailsFrame>
  );
};

export default OrderDetails;
