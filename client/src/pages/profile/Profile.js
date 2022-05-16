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
  const [profileData, setProfileData] = useState({});
  const { accountState, dispatch } = useContext(AccountContext);
  const [componentIndex, setComponentIndex] = useState(0);
  const accountType = accountState ? accountState.accountType : 1;

  useEffect(() => {
    const fn = async () => {
      const res = await getProfile(accountState.id);

      setProfileData(res);
    };
    fn();
  }, []);

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
          <Heading level={3}>
            Settings: {accountType === 0 ? "Employer" : "Handyman"}
          </Heading>
        </Box>

        <Box direction="row-responsive" gap="large" fill>
          <Sidebar width="small" fill="vertical">
            <ShowButtons accountType={accountType} menuOnClick={menuOnClick} />
          </Sidebar>
          <Main fill="vertical">
            <OptionalRender componentToRender={componentIndex}>
              <MyDetails value={0} myDetailsData={profileData} />
              <Team value={1} primaryProfileId={accountState.id} />
              <Orders employerUserId={accountState.id} value={2} />
              <Verify value={3} />
            </OptionalRender>
          </Main>
        </Box>
      </PageContent>
    </Page>
  );
};

const ShowButtons = ({ accountType = 0, menuOnClick }) => {
  return (
    <Nav gap="small">
      <Button
        primary
        value={0}
        label="My Details"
        onClick={menuOnClick}
        key={`menu-0`}
      />
      {accountType === 1 && (
        <Button
          primary
          value={1}
          label="Team"
          onClick={menuOnClick}
          key={`menu-1`}
        />
      )}
      <Button
        primary
        value={2}
        label="Orders"
        onClick={menuOnClick}
        key={`menu-2`}
      />
      <Button
        primary
        value={3}
        label="Verify"
        onClick={menuOnClick}
        key={`menu-3`}
      />
    </Nav>
  );
};

export default Profile;
