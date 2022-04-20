import React from "react";
import { Page, PageContent } from "grommet";
import ProfileComponent from "../components/Profile/ProfileComponent";

const Profile = () => {
  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small">
        <ProfileComponent />
      </PageContent>
    </Page>
  );
};

export default Profile;
