import React, { useEffect, useState } from "react";
import { Box, Text, Button, Avatar, Heading, Main, Image } from "grommet";
import { User as UserIcon } from "grommet-icons";
import { getFeedbacksToUserId } from "../../../API/admin";

const LabelText = (props) => (
  <Box align="start" width={{ min: "9em" }}>
    <Text color="gray" {...props} />
  </Box>
);

const StyledBox = (props) => (
  <Box
    direction="row-responsive"
    gap="small"
    height="4em"
    align="center"
    {...props}
  />
);

const UserProfile = ({
  onEdit,
  picture,
  description,
  name,
  contactNo,
  services,
  id,
  User,
}) => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const res = await getFeedbacksToUserId(id);
      console.log("fn", res);
    };
    if (User) fn();
  }, [User]);
  console.log("here");
  return (
    <Box direction="column" pad="small">
      <StyledBox height="small" align="end">
        <Box
          direction="row"
          gap="medium"
          fill="horizontal"
          pad={{ left: "3em" }}
        >
          <Box>
            <Avatar className="b-1" size="large">
              {picture ? (
                <Image
                  src={"data:image/jpg;base64," + picture}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "25em" }}
                />
              ) : (
                <UserIcon color="black" />
              )}
            </Avatar>
          </Box>
          <Box align="start" width="large">
            <Heading level={3}>{name}</Heading>
            <Heading level={6} color="gray">
              {User && User.username}
            </Heading>
          </Box>
          <Box justify="center">
            <Button primary label="Edit Profile" onClick={onEdit} />
          </Box>
        </Box>
      </StyledBox>

      <Main margin={{ top: "2em" }}>
        <StyledBox gap="medium">
          <LabelText>Services </LabelText>
          <Text>{services}</Text>
        </StyledBox>
        <StyledBox gap="8em" direction="row">
          <Box direction="row" gap="medium">
            <LabelText>Contact Number </LabelText>
            <Text>{contactNo}</Text>
          </Box>
          <Box direction="row" gap="medium">
            <LabelText>Email</LabelText>
            <Text>{User && User.email}</Text>
          </Box>
        </StyledBox>
        <StyledBox gap="medium">
          <LabelText>Description</LabelText>
          <Text>{description}</Text>
        </StyledBox>
        {/* <StyledBox>Feedbacks</StyledBox> */}
      </Main>
    </Box>
  );
};

export default UserProfile;
