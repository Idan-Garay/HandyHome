import React from "react";
import { User, Map, Send } from "grommet-icons";
import { Box, Text, Button, Avatar } from "grommet";

const UserProfile = () => {
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
        <Text textAlign="right"> Area 1</Text>
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
        <Text textAlign="right">6 days</Text>
      </Box>

      <Button type="submit" fill="horizontal" primary label="Request" />
    </Box>
  );
};

export default UserProfile;
