import React from "react";
import { Box, Heading, Text, Button, Avatar } from "grommet";
import { User, Map, Send } from "grommet-icons";
import styled from "styled-components";

const ProfileComponent = () => {
  return (
    <Box align="center" wrap className="b-1" background="#F8F8F8">
      <Box
        className="b-1"
        gap="small"
        direction="column"
        align="center"
        width="medium"
      >
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
        <Box
          width={{ min: "small" }}
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
          width={{ min: "small" }}
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

        <Button type="submit" fill="horizontal" primary label="Send" />
      </Box>
    </Box>
  );
};

export default ProfileComponent;
