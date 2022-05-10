import React, { useEffect, useState } from "react";
import { Page, PageContent } from "grommet";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useParams } from "react-router-dom";
import { getProfile } from "../API/profiles";

const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fn = async () => {
      const res = await getProfile(id);
      setProfileData(res);
      console.log("hello", res);
    };
    fn();
  }, []);

  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small">
        <ProfileComponent {...profileData} />
      </PageContent>
    </Page>
  );
};

export default Profile;
