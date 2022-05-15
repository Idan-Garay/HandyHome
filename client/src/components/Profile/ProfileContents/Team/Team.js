import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Avatar,
  Heading,
  Box,
  Text,
  Main,
} from "grommet";
import {
  Edit,
  User,
  Trash,
  AddCircle,
  LinkPrevious,
  User as UserIcon,
} from "grommet-icons";
import { useNavigate } from "react-router-dom";
import { getTeamMembers } from "../../../../API/team";

const StyledBox = (props) => (
  <Box
    direction="row-responsive"
    gap="small"
    height="4em"
    align="center"
    {...props}
  />
);

const LabelText = (props) => (
  <Box align="start" width={{ min: "9em" }}>
    <Text color="gray" {...props} />
  </Box>
);

const TeamMember = (props) => {
  const { name, services, contactNo } = props.member;
  const { handleClick } = props;

  return (
    <Card height="18em" width="small" background="light-1">
      <CardHeader pad="medium" direction="column" onClick={handleClick}>
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
        <Heading level={5}>{name}</Heading>
      </CardHeader>
      <CardBody pad="medium" onClick={handleClick}>
        <Text>{services}</Text>
        <Text>{contactNo}</Text>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Edit color="plain" />} hoverIndicator />
        <Button icon={<Trash color="red" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
};

const AddTeamMember = ({ handleClick }) => (
  <Card
    height="18em"
    width="small"
    background="light-1"
    onClick={handleClick}
    align="center"
    hoverIndicator="#efefef"
  >
    {/* <CardHeader pad="medium" direction="column">
    </CardHeader> */}
    <CardBody direction="column" align="center" justify="center" gap="medium">
      <Avatar size="xlarge" background="accent-3">
        <AddCircle size="large" />
      </Avatar>
      <Heading level={5}>Add a team member</Heading>
    </CardBody>
  </Card>
);

const MemberPageToRender = ({ member, clickPrevious }) => {
  return (
    <Box background="#efefef" pad="medium" round>
      <Box>
        <LinkPrevious
          color="black"
          size="medium"
          onClick={clickPrevious}
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
            <Button primary label="Edit Profile" onClick={() => {}} />
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

const Team = ({ primaryProfileId }) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [innerPage, setInnerPage] = useState(false);
  const [member, setMember] = useState(null);

  const handleClick = () => {
    navigate("add");
  };

  const handleChooseMember = (member) => {
    setInnerPage(true);
    setMember(member);
  };

  const clickPrevious = () => {
    setInnerPage(false);
  };

  useEffect(() => {
    const fn = async () => {
      const membersResult = await getTeamMembers(primaryProfileId);

      setMembers(membersResult);
    };
    fn();
  }, []);

  return (
    <>
      {innerPage ? (
        <MemberPageToRender member={member} clickPrevious={clickPrevious} />
      ) : (
        <Box direction="row-responsive" gap="medium" justify="start">
          <AddTeamMember handleClick={handleClick} />
          {members && members.length
            ? members.map((member, idx) => (
                <TeamMember
                  key={idx}
                  member={member}
                  handleClick={() => {
                    handleChooseMember(member);
                  }}
                />
              ))
            : null}
        </Box>
      )}
    </>
  );
};

export default Team;
