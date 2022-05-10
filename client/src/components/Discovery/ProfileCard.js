import React from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, Text } from "grommet";
import { User, Map } from "grommet-icons";

import styled from "styled-components";

const LeftAlignedText = styled(Text)`
  text-align: left;
`;

const StyledBox = styled(Box)`
  margin-top: 1em;
`;

const ProfileCard = ({ profileData }) => {
  const { id, services, name, area } = profileData;

  return (
    <Link
      to={`profiles/${id}`}
      state={profileData}
      style={{ textDecoration: "none" }}
    >
      <StyledBox
        round
        pad="small"
        width={{ min: "medium", max: "large" }}
        background="#f8f8f8"
      >
        <Box direction="row" gap="small">
          <Avatar background="accent-3">
            <User />
          </Avatar>
          <Box align="start">
            <LeftAlignedText>{name}</LeftAlignedText>
            <LeftAlignedText size="xsmall" color="#B6B6B6">
              {/* {services.join(", ")} */}
              {services}
            </LeftAlignedText>
          </Box>
        </Box>
        <Box direction="row" justify="between">
          <Box direction="row" align="end">
            <Map />
            <Text>{area}</Text>
          </Box>

          {/* <Button primary label="Request" /> */}
        </Box>
      </StyledBox>
    </Link>
  );
};

export default ProfileCard;
