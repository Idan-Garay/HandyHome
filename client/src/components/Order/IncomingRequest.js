import React from "react";
import { Box, Button, Heading, TextArea, TextInput, Text } from "grommet";
import { acceptRequest } from "../../API/order";
import styled from "styled-components";

const CancelButton = styled(Button)`
  color: black;
  border: 1px solid #eaeaea;
`;

const IncomingRequest = ({ form }) => {
  const { id, contactNo, minRate, description } = form || {
    id: "0",
    contactNo: "09XXX XXX XXX",
    minRate: "600",
    description: "Clean 2-acre shrubs",
  };

  const onAccept = (e) => {
    const name = e.target.name;

    const isAccepted = name === "accept" ? true : false;
    acceptRequest(id, isAccepted);
  };

  return (
    <Box align="center" wrap>
      <Heading margin={{ bottom: "0.5em" }}>An Employer's Request</Heading>
      <Box>
        <Box
          width="large"
          gap="large"
          background="#F9F9F9"
          pad="medium"
          round="small"
        >
          <Box direction="row" gap="xlarge">
            <Box>
              <Text color="#B6B6B6">Contact Number</Text>
              <Text>{contactNo}</Text>
            </Box>
            <Box>
              <Text color="#CCCCCC">Minimum Daily Rate</Text>
              <Text>{minRate}</Text>
            </Box>
          </Box>
          <Box align="start">
            <Text color="#CCCCCC" weight={500}>
              Description
            </Text>
            <Text>{description}</Text>
          </Box>
        </Box>
        <Box
          margin={{ top: "small" }}
          alignSelf="end"
          direction="row"
          gap="xsmall"
        >
          <CancelButton
            type="button"
            name="cancel"
            label="Cancel"
            onClick={onAccept}
          />
          <Button
            type="button"
            primary
            name="accept"
            label="Accept"
            onClick={onAccept}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default IncomingRequest;
