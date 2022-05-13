import React, { useContext, useEffect, useState } from "react";
import { Page, PageContent, Button, Box } from "grommet";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../API/profiles";
import { AccountContext } from "../App";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { AccountState, dispatch } = useContext(AccountContext);
  const isUnauthorized = !AccountState ? true : false;

  const onLogout = () => {
    dispatch({ type: "LOGOUT_ACCOUNT" });
    navigate("/login");
  };

  useEffect(() => {
    const fn = async () => {
      const res = await getProfile(id);
      setProfileData(res);
    };
    fn();
  }, []);

  return (
    <Page kind="wide" pad="0 2em">
      <PageContent background="light" border={true} round="small" gap="medium">
        <ProfileComponent {...profileData} isUnauthorized={isUnauthorized} />
        {!isUnauthorized && (
          <Box direction="row" width="small">
            <Button primary size="medium" fill onClick={onLogout}>
              Log out
            </Button>
          </Box>
        )}
      </PageContent>
    </Page>
  );
};

export default Profile;
