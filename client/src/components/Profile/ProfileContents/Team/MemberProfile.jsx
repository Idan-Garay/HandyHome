import React from "react";
import { Box, Text, Button, Avatar, Heading } from "grommet";
import { LinkPrevious, User as UserIcon } from "grommet-icons";

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

const MemberProfile = ({ member, changeComponentIndex }) => {
  return (
    <Box background="#efefef" pad="medium" round>
      <Box>
        <LinkPrevious
          color="black"
          size="medium"
          onClick={() => changeComponentIndex(0)}
          cursor="pointer"
        />
      </Box>
      <Box>
        <Box
          direction="row"
          gap="medium"
          height="xsmall"
          classname="b-1"
          fill="horizontal"
          pad={{ left: "3em" }}
        >
          <Box>
            <Avatar className="b-1" size="large" pad="3px">
              <UserIcon color="black" />
            </Avatar>
          </Box>
          <Box align="start" width="large">
            <Heading level={3}>{member.name}</Heading>
          </Box>
          <Box justify="center">
            <Button
              primary
              label="Edit Profile"
              onClick={() => changeComponentIndex(2)}
            />
          </Box>
        </Box>
        <Box>
          <StyledBox gap="medium">
            <LabelText>Services </LabelText>
            <Text>{member.services}</Text>
          </StyledBox>
          <StyledBox gap="8em" direction="row">
            <Box direction="row" gap="medium">
              <LabelText>Contact Number </LabelText>
              <Text>{member.contactNo}</Text>
            </Box>
            <Box direction="row" gap="medium">
              <LabelText>Email</LabelText>
              <Text>{member.email}</Text>
            </Box>
          </StyledBox>
          <StyledBox gap="medium">
            <LabelText>Description</LabelText>
            <Text>{member.description}</Text>
          </StyledBox>
        </Box>
      </Box>
    </Box>
  );
};

export default MemberProfile;
