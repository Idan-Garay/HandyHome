import React, { useContext, useEffect, useState } from "react";
import { Page, PageContent, Box, Main, Sidebar, Heading } from "grommet";
import { getProfile } from "../../API/profiles";
import { AccountContext } from "../../App";
import MyDetails from "../../components/Profile/ProfileContents/MyDetails";
import Orders from "../../components/Profile/ProfileContents/Orders";
import Team from "../../components/Profile/ProfileContents/Team/Team";
import Verify from "../../components/Profile/ProfileContents/Verify";
import ShowButtons from "../../components/Profile/ShowButtons";
import OptionalRender from "../../components/OptionalRender";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const { accountState, dispatch } = useContext(AccountContext);
  const [componentIndex, setComponentIndex] = useState(0);
  const accountType = accountState ? accountState.accountType : 1;

  useEffect(() => {
    let profileIdx = localStorage.getItem("profileIdx");

    if (profileIdx) setComponentIndex(parseInt(profileIdx));
  }, [componentIndex]);

  useEffect(() => {
    const fn = async () => {
      const res = await getProfile(accountState.id);
      dispatch({ type: "EDIT_PROFILE", payload: { picture: res.picture } });
      setProfileData(res);
    };
    fn();
  }, []);

  const menuOnClick = (e) => {
    const { value } = e.target;
    localStorage.setItem("profileIdx", value);
    setComponentIndex(parseInt(value));
  };

  return (
    <Page kind="wide" fill>
      <PageContent
        round="small"
        gap="medium"
        fill
        direction="column"
        align="start"
      >
        <Box direction="row-responsive" gap="large" width="100vh" fill>
          <Box>
            <Heading level={4}>
              Settings: {accountType === 0 ? "Employer" : "Handyman"}
            </Heading>

            <Sidebar width={{ min: "20%" }}>
              <ShowButtons
                accountType={accountType}
                menuOnClick={menuOnClick}
              />
            </Sidebar>
          </Box>
          <Main width={{ max: "79%" }}>
            <OptionalRender componentToRender={componentIndex}>
              <MyDetails value={0} myDetailsData={profileData} />
              <Team
                value={1}
                primaryProfileId={accountState.id}
                setProfileComponentIndex={setComponentIndex}
              />
              <Orders
                userId={accountState.id}
                accountType={accountState.accountType}
                value={2}
                setProfileComponentIndex={setComponentIndex}
              />
              <Verify
                profileData={profileData}
                value={3}
                setProfileComponentIndex={setComponentIndex}
              />
            </OptionalRender>
          </Main>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Profile;
