import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  PageContent,
  Button,
  Box,
  Main,
  Sidebar,
  Nav,
  Heading,
} from "grommet";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../../API/profiles";
import { AccountContext } from "../../App";
import MyDetails from "../../components/Profile/ProfileContents/MyDetails";
import Orders from "../../components/Profile/ProfileContents/Orders";
import Team from "../../components/Profile/ProfileContents/Team/Team";
import Verify from "../../components/Profile/ProfileContents/Verify";

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
  const [componentIndex, setComponentIndex] = useState(1);

  useEffect(() => {
    const fn = async () => {
      const res = await getProfile(id);

      setProfileData(res);
    };
    fn();
  }, []);

  const profileMenuBtns = ["My Details", "Team", "Orders", "Verify"];

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
              <MyDetails value={0} myDetailsData={profileData} />
              <Team value={1} primaryProfileId={id} />
              <Orders value={2} />
              <Verify value={3} />
            </OptionalRender>
          </Main>
        </Box>
      </PageContent>
    </Page>
  );
};

export default Profile;
