import React from "react";
import { Box } from "grommet";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import ProfileDetail from "./ProfileDetail";
import CoWorker from "./CoWorker";

const StyledH2 = styled.h2`
  text-align: left;
  margin-left: 26%;
`;

const ProfileComponent = () => {
  return (
    <Box
      align="center"
      wrap
      background="#F8F8F8"
      round="small"
      pad="small"
      gap="large"
    >
      <Box direction="row-responsive">
        <UserProfile />
        <ProfileDetail />
      </Box>
      <Box gap="small">
        <StyledH2>Co-workers</StyledH2>
        <CoWorker />
      </Box>
    </Box>
  );
};

export default ProfileComponent;
