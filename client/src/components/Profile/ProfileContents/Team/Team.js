import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Avatar,
  Heading,
  Box,
} from "grommet";
import { Edit, User, Trash, AddCircle } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const TeamMember = () => (
  <Card height="18em" width="small" background="light-1">
    <CardHeader pad="medium" direction="column">
      <Avatar size="xlarge" background="accent-3">
        <User size="large" />
      </Avatar>
      <Heading level={5}>Full Name</Heading>
    </CardHeader>
    <CardBody pad="medium">services, contact Number</CardBody>
    <CardFooter pad={{ horizontal: "small" }} background="light-2">
      <Button icon={<Edit color="plain" />} hoverIndicator />
      <Button icon={<Trash color="red" />} hoverIndicator />
    </CardFooter>
  </Card>
);

const AddTeamMember = ({ handleClick }) => (
  <Card height="18em" width="small" background="light-1" onClick={handleClick}>
    <CardHeader pad="medium" direction="column">
      <Avatar size="xlarge" background="accent-3">
        <AddCircle size="large" />
      </Avatar>
      <Heading level={5}>Add a team member</Heading>
    </CardHeader>
    <CardBody></CardBody>
  </Card>
);

const Team = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add");
  };

  return (
    <Box direction="row-responsive" gap="medium" justify="start">
      <AddTeamMember handleClick={handleClick} />
      <TeamMember />
    </Box>
  );
};

export default Team;
