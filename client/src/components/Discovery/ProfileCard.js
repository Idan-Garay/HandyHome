import React from "react";
import { Box, Avatar, Text, Button } from "grommet";
import { User, Location, Map } from "grommet-icons";
import styled from "styled-components";

const LeftAlignedText = styled(Text)`
  text-align: left;
`;

// onClickRequest -> profile's phoneNumber, id is passed
// redirect to request page depending on user

const ProfileCard = () => {
  return (
    <Box
      // border={{ color: "black", size: "small", style: "solid", side: "all" }}
      round
      pad="small"
      width="medium"
      background="#f8f8f8"
    >
      <Box direction="row" gap="small">
        <Avatar background="accent-3">
          <User />
        </Avatar>
        <Box align="start">
          <LeftAlignedText>Nugget Chicken</LeftAlignedText>
          <LeftAlignedText size="xsmall" color="#B6B6B6">
            masonry, construction, gardener
          </LeftAlignedText>
        </Box>
      </Box>
      <Box direction="row" justify="between">
        <Box direction="row" align="end">
          <Map />
          <Text>Compostela</Text>
        </Box>
        <Button primary label="Request" />
      </Box>
    </Box>
  );
};

export default ProfileCard;
