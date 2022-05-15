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
} from "grommet";
import { Edit, User, Trash, AddCircle } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import { getTeamMembers } from "../../../../API/team";

const TeamMember = (props) => {
  const { name, services, contactNo } = props.member;
  const { handleClick } = props;

  return (
    <Card height="18em" width="small" background="light-1">
      <CardHeader pad="medium" direction="column">
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
        <Heading level={5}>{name}</Heading>
      </CardHeader>
      <CardBody pad="medium">
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

const MemberPageToRender = ({ member }) => {
  return (
    <>
      {member.ProfileId} + {member.name}
    </>
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

  const handleChooseMember = (e) => {
    setInnerPage(true);
    // setMember();
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
        <MemberPageToRender member={member} />
      ) : (
        <Box direction="row-responsive" gap="medium" justify="start">
          <AddTeamMember handleClick={handleClick} />
          {members && members.length
            ? members.map((member, idx) => (
                <TeamMember
                  key={idx}
                  member={member}
                  handleClick={handleChooseMember}
                />
              ))
            : null}
        </Box>
      )}
    </>
  );
};

export default Team;
