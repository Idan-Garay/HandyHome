import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  PageContent,
  Button,
  Box,
  Main,
  Sidebar,
  Nav,
  Tabs,
  Tab,
  Heading,
} from "grommet";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../API/profiles";
import { AccountContext } from "../App";
import MyDetails from "../components/Profile/ProfileContents/MyDetails";
import Orders from "../components/Profile/ProfileContents/Orders";
import Password from "../components/Profile/ProfileContents/Password";
import Team from "../components/Profile/ProfileContents/Team";
import Verify from "../components/Profile/ProfileContents/Verify";

const Profile2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { accountState, dispatch } = useContext(AccountContext);

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
        <ProfileComponent
          {...profileData}
          isUnauthorized={accountState.isAuthorized}
        />
        {accountState.isAuthorized && (
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

const OptionalRender = (props) => {
  const { componentToRender, children } = props;

  const ChosenComponent = children.find(
    (component) => component.props.value === componentToRender
  );

  return ChosenComponent;
};

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { accountState, dispatch } = useContext(AccountContext);
  const [componentIndex, setComponentIndex] = useState(0);
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

  const profileMenuBtns = [
    "My Details",
    "Team",
    "Password",
    "Orders",
    "Verify",
  ];

  const menuOnClick = (e) => {
    const { value } = e.target;
    setComponentIndex(parseInt(value));
  };

  return (
    <Page kind="wide" pad="0 .5em" fill>
      <PageContent
        round="small"
        gap="medium"
        fill
        direction="column"
        align="start"
      >
        <Box
          height="small"
          direction="row"
          align="center"
          fill="horizontal"
          margin={{ top: "1em" }}
          border={{ side: "bottom", color: "#ECECEC" }}
        >
          <Heading level={3}>Settings</Heading>
        </Box>

        <Box direction="row-responsive" gap="large" fill>
          <Sidebar width="small" fill="vertical">
            <Nav>
              {profileMenuBtns.map((btnName, idx) => (
                <Button
                  primary
                  value={idx}
                  label={btnName}
                  onClick={menuOnClick}
                  key={`menu-${idx}`}
                />
              ))}
            </Nav>
          </Sidebar>
          <Main fill="vertical">
            <OptionalRender componentToRender={componentIndex}>
              <MyDetails value={0} />
              <Team value={1} />
              <Password value={2} />
              <Orders value={3} />
              <Verify value={4} />
            </OptionalRender>
          </Main>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Profile;
