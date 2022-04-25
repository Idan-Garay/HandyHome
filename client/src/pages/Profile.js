import React from "react";
import { Page, PageContent } from "grommet";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const profileData = useLocation().state;

  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small">
        <ProfileComponent {...profileData} />
      </PageContent>
    </Page>
  );
};

export default Profile;
