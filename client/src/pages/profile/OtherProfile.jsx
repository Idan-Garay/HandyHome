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
  Image,
} from "grommet";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
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

const AvatarProfile = ({ primaryProfile }) => {
  const { accountState } = useContext(AccountContext);
  const { picture, Address, User, contactNo, id } = primaryProfile;

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
          {picture ? (
            <img
              src={"data:image/jpg;base64," + picture}
              width="100%"
              height="100%"
            />
          ) : (
            <User size="large" />
          )}
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
        <Text textAlign="end"> {Address ? Address.area : "_"}</Text>
      </Box>

      <Box
        width={{ min: "75%", max: "90%" }}
        direction="row"
        justify="between"
        fill="horizontal"
      ></Box>

      {accountState.accountType === 0 && accountState.isAuthorized ? (
        <Link
          to={`/profiles/${id}/request`}
          state={{ toUserId: User.id, contactNo }}
        >
          <Button type="submit" fill="horizontal" primary label="Request" />
        </Link>
      ) : null}
    </Box>
  );
};

const ProfileDetail = ({ primaryProfile }) => {
  const { name, services, description, email, contactNo } = primaryProfile;
  return (
    <Box gap="medium" width="90%">
      <Box width="medium">
        <Heading level={3} textAlign="start">
          {name}
        </Heading>
        <Heading level={5} textAlign="start" color="gray">
          {services
            .split(",")
            .map((service) => {
              return service[0].toUpperCase() + service.slice(1);
            })
            .join(", ")}
        </Heading>
      </Box>
      <Text textAlign="start">" {description} "</Text>
      <Box direction="row-responsive" gap="xlarge">
        <Text>
          Email: <strong>{email}</strong>
        </Text>
        <Text>
          Contact: <strong>{contactNo}</strong>
        </Text>
      </Box>
    </Box>
  );
};

const OtherProfile = () => {
  const { id } = useParams();
  const [primaryProfile, setPrimaryProfile] = useState(null);
  const [secondaryProfiles, setSecondaryProfiles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fn = async () => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      };
      let res = await fetch(
        "http://localhost:3501/otherProfile",
        requestOptions
      );
      res = await res.json();
      let { primary, secondary } = res;

      setPrimaryProfile(primary);
      setSecondaryProfiles(secondary);
    };
    fn();
  }, []);

  return (
    <Page kind="wide" pad="3em .5em" fill height="full">
      {primaryProfile && (
        <PageContent
          round="small"
          gap="medium"
          fill
          direction="column"
          align="start"
        >
          <Box direction="row-responsive" gap="medium">
            <AvatarProfile primaryProfile={primaryProfile} />
            <ProfileDetail primaryProfile={primaryProfile} />
          </Box>
          <Box direction="row-responsive">
            <Heading level={3}>Team |</Heading>
            <Heading level={3}> Feedbacks</Heading>
          </Box>
          <Box fill>
            {secondaryProfiles.length
              ? secondaryProfiles.map((p, idx) => (
                  <OtherMember key={"other" + idx} secondaryProfile={p} />
                ))
              : "No Teammates"}
          </Box>
        </PageContent>
      )}
    </Page>
  );
};

const OtherMember = ({ secondaryProfile }) => {
  const { name, services, description, email, contactNo, picture } =
    secondaryProfile;
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
              {picture.length ? (
                <Image src={"data:image/jpg;base64," + picture} fill />
              ) : (
                <User size="large" />
              )}
            </Avatar>
          </Box>
          <Box width="medium">
            <Heading level={3} textAlign="start">
              {name}
            </Heading>
            <Heading level={5} textAlign="start" color="gray">
              {services
                .split(",")
                .map((service) => service[0].toUpperCase() + service.slice(1))
                .join(", ")}
            </Heading>
          </Box>
        </Box>

        <Box gap="medium" width="50%">
          <Text textAlign="start" margin={{ left: "1em" }}>
            Description:“ {description} "
          </Text>
          <Box direction="row-responsive" gap="xlarge" margin={{ left: "1em" }}>
            <Text>
              Email: <strong>{email}</strong>
            </Text>
            <Text>
              Contact: <strong>{contactNo}</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherProfile;
