import React from "react";
import { Link } from "react-router-dom";
import { User, Map, Send, UserSettings } from "grommet-icons";
import { Box, Text, Button, Avatar } from "grommet";

const UserProfile = ({ id, contactNo, area, accountType, isAuthorized }) => {
  return (
    <Box
      gap="small"
      direction="column"
      align="center"
      width={{ min: "medium" }}
    >
      <Box
        direction="row-reverse"
        justify="evenly"
        width="100%"
        gap="xlarge"
        pad={{ right: "1em" }}
      >
        {isAuthorized && (
          <Avatar background="#a9a9a9" size="small">
            <UserSettings color="white" size="13em" cursor="pointer" />
          </Avatar>
        )}
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
      </Box>
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

      {accountType === 1 && (
        <Link
          to={`/profiles/${id}/request`}
          state={{ profileId: id, contactNo }}
        >
          <Button type="submit" fill="horizontal" primary label="Request" />
        </Link>
      )}
    </Box>
  );
};

export default UserProfile;