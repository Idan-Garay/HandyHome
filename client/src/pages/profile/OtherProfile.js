import React, { useContext, useEffect, useState } from "react";
import {
  Page,
  PageContent,
  Button,
  Box,
  Avatar,
  Text,
  Heading,
  Grid,
} from "grommet";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getProfile } from "../../API/profiles";
import { AccountContext } from "../../App";
import { User, Send, Map } from "grommet-icons";

const OptionalRender = (props) => {
  const { componentToRender, children } = props;

  const ChosenComponent = children.find(
    (component) => component.props.value === componentToRender
  );

  return ChosenComponent;
};

const AvatarProfile = () => {
  return (
    <Box
      gap="small"
      direction="column"
      align="center"
      width={{ min: "medium" }}
      height="medium"
    >
      <Box
        direction="row-reverse"
        justify="evenly"
        width="100%"
        gap="xlarge"
        pad={{ right: "1em" }}
      >
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
      </Box>
      <Box
        width={{ min: "75%", max: "90%" }}
        direction="row"
        justify="between"
        fill="horizontal"
      >
        <Box direction="row" gap="small">
          <Map />
          <Text color="gray">From</Text>
        </Box>
        <Text textAlign="end"> area</Text>
      </Box>

      <Box
        width={{ min: "75%", max: "90%" }}
        direction="row"
        justify="between"
        fill="horizontal"
      >
        <Box direction="row" gap="small">
          <Send />
          <Text color="gray">Last Delivery</Text>
        </Box>
        <Text textAlign="end">6 days</Text>
      </Box>

      {/* <Link to={`/`} state={{ profileId: id, contactNo }}>
    <Button type="submit" fill="horizontal" primary label="Request" />
  </Link> */}

      <Link to={`/`}>
        <Button type="submit" fill="horizontal" primary label="Request" />
      </Link>
    </Box>
  );
};

const ProfileDetail = () => {
  return (
    <Box>
      <Box
        justify="start"
        pad="small"
        align="start"
        gap="small"
        fill="horizontal"
      >
        <Box>
          <h2 className="textAlignLeft">name</h2>
          <Text as="h4" color="gray" textAlign="start">
            service
          </Text>
        </Box>
        <Box fill="horizontal" wrap>
          <Text as="p" textAlign="start">
            Brokers and traders and money moves field bet customer value chain
            emerging markets piker embracing ingenuity. Mortgage the colour of
            money block chain transactions makin' chedda and money moves
            discount window lending bitcoin protocol short traders. Billionaire
            hedge fund manager earnings bear market all ab afdsfsdf
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const OtherProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { accountState, dispatch } = useContext(AccountContext);
  const [componentIndex, setComponentIndex] = useState(0);

  // useEffect(() => {
  //   const fn = async () => {
  //     const res = await getProfile(id);

  //     setProfileData(res);
  //   };
  //   fn();
  // }, []);

  const profileMenuBtns = ["My Details", "Team", "Orders", "Verify"];

  const menuOnClick = (e) => {
    const { value } = e.target;
    setComponentIndex(parseInt(value));
  };

  return (
    <Page kind="wide" pad="3em .5em" fill height="full">
      <PageContent
        round="small"
        gap="medium"
        fill
        direction="column"
        align="start"
      >
        <Box direction="row-responsive" gap="medium">
          <AvatarProfile />
          <ProfileDetail />
        </Box>
        <Box direction="row-responsive">
          <Heading level={3}>Team |</Heading>
          <Heading level={3}> Feedbacks</Heading>
        </Box>
        <Box fill>
          <OtherMember />
          <OtherMember />
          <OtherMember />
          <OtherMember />
        </Box>
      </PageContent>
    </Page>
  );
};

const OtherMember = () => {
  return (
    <Box height="12em">
      <Box
        direction="row-responsive"
        justify="evenly"
        fill="horizontal"
        gap="large"
        border={{ side: "top", color: "#aeaeae", size: "1px" }}
        pad="2em"
        height="large"
      >
        <Box direction="row" gap="medium">
          <Box>
            <Avatar size="xlarge" background="accent-3">
              <User size="large" />
            </Avatar>
          </Box>
          <Box width="medium">
            <Heading level={3} textAlign="start">
              Warne Johan
            </Heading>
            <Heading level={5} textAlign="start">
              Masonry, Gardening
            </Heading>
          </Box>
        </Box>

        <Box gap="medium" width="50%">
          <Text>
            “Gen X are slackers I saw it on Facebook I'm videoing this if I sit
            down I might not get back up total bummer grey nomads just took up
            surfing"
          </Text>
          <Box direction="row-responsive" gap="xlarge" margin={{ left: "1em" }}>
            <Text>
              Email: <strong>JohanWarne@gmail.com</strong>
            </Text>
            <Text>
              Contact: <strong>0963425342</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherProfile;
