import React from "react";
import { Link } from "react-router-dom";
import { User, Map, Send } from "grommet-icons";
import { Box, Text, Button, Avatar } from "grommet";

const EmployerProfile = ({ id, contactNo, area }) => {
  return (
    <Box
      gap="small"
      direction="column"
      align="center"
      width={{ min: "medium" }}
    >
      <Avatar size="xlarge" background="accent-3">
        <User size="large" />
      </Avatar>
      <Box
        width={{ min: "75%", max: "90%" }}
        direction="row"
        justify="between"
        fill="horizontal"
      >
        <Box direction="row" gap="small">
          <Map />
          <Text color="gray">From</Text>
        </Box>
        <Text textAlign="end"> {area}</Text>
      </Box>

      <Box
        width={{ min: "75%", max: "90%" }}
        direction="row"
        justify="between"
        fill="horizontal"
      >
        <Box direction="row" gap="small">
          <Send />
          <Text color="gray">Last Delivery</Text>
        </Box>
        <Text textAlign="end">6 days</Text>
      </Box>

    </Box>
  );
};

export default EmployerProfile;
