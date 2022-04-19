import React from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, Text, Button } from "grommet";
import { User, Map } from "grommet-icons";

import styled from "styled-components";

const LeftAlignedText = styled(Text)`
  text-align: left;
`;

const StyledBox = styled(Box)`
  margin-top: 1em;
`;

// onClickRequest -> profile's phoneNumber, id is passed
// redirect to request page depending on user

const ProfileCard = ({ profileData }) => {
  const { id, contactNo, services, area, name } = profileData;

  return (
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
            {services.join(", ")}
          </LeftAlignedText>
        </Box>
      </Box>
      <Box direction="row" justify="between">
        <Box direction="row" align="end">
          <Map />
          <Text>{area}</Text>
        </Box>
        <Link to="request" state={{ profileId: id, contactNo }}>
          <Button primary label="Request" />
        </Link>
      </Box>
    </StyledBox>
  );
};

export default ProfileCard;
