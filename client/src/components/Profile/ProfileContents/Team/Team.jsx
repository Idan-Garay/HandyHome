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
import { Edit, User, Trash, AddCircle, User as UserIcon } from "grommet-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getTeamMembers } from "../../../../API/team";
import MemberProfile from "./MemberProfile";
import MemberEditProfile from "./MemberEditProfile";
import { deleteMemberProfile } from "../../../../API/profiles";

const TeamMember = (props) => {
  const userId = useParams.id;
  const { name, services, contactNo, id } = props.member;
  const { handleChooseMember } = props;
  const { deleteMember } = props;

  const editMemberProfile = () => {
    handleChooseMember(props.member, 2);
  };

  const chooseMember = () => {
    handleChooseMember(props.member, 1);
  };

  const deleteMemberTeam = () => {
    deleteMember(props.member);
    deleteMemberProfile(userId, id);
  };

  return (
    <Card height="18em" width="small" background="light-1">
      <CardHeader pad="medium" direction="column" onClick={chooseMember}>
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
        <Heading level={5}>{name}</Heading>
      </CardHeader>
      <CardBody pad="medium" onClick={chooseMember} height="medium">
        <Text>{services}</Text>
        <Text>{contactNo}</Text>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button
          icon={<Edit color="plain" />}
          onClick={editMemberProfile}
          hoverIndicator
        />
        <Button
          icon={<Trash color="red" />}
          onClick={deleteMemberTeam}
          hoverIndicator
        />
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
    margin={{ bottom: "3em" }}
  >
    <CardBody direction="column" align="center" justify="center" gap="medium">
      <Avatar size="xlarge" background="accent-3">
        <AddCircle size="large" />
      </Avatar>
      <Heading level={5}>Add a team member</Heading>
    </CardBody>
  </Card>
);

const OptionalRender = (props) => {
  const { componentToRender, children } = props;

  const ChosenComponent = children.find(
    (component) => component.props.value === componentToRender
  );

  return ChosenComponent;
};

const Team = ({ primaryProfileId, setProfileComponentIndex }) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState(null);
  const [componentIndex, setComponentIndex] = useState(0);

  const handleClick = () => {
    navigate("add", { state: { primaryProfileId } });
  };

  const changeComponentIndex = (val = 0) => {
    setComponentIndex(val);
  };

  const handleChooseMember = (member, componentIdx = 1) => {
    setComponentIndex(componentIdx);
    setMember(member);
  };

  const deleteMember = (member) => {
    const newMembers = members.filter((mem) => mem.id !== member.id);
    setMembers(newMembers);
  };

  useEffect(() => {
    setProfileComponentIndex(1);
    const fn = async () => {
      const membersResult = await getTeamMembers(primaryProfileId);
      setMembers(membersResult);
    };
    fn();
  }, []);

  return (
    <OptionalRender componentToRender={componentIndex}>
      <Box
        value={0}
        direction="row-responsive"
        gap="medium"
        justify="start"
        overflow={{ vertical: "scroll" }}
        fill
        wrap
      >
        <AddTeamMember
          handleClick={handleClick}
          primaryProfileId={primaryProfileId}
        />
        {members && members.length
          ? members.map((member, idx) => (
              <TeamMember
                key={idx}
                member={member}
                changeComponentIndex={changeComponentIndex}
                handleChooseMember={handleChooseMember}
                deleteMember={deleteMember}
              />
            ))
          : null}
      </Box>
      <MemberProfile
        value={1}
        member={member}
        changeComponentIndex={changeComponentIndex}
      />
      <MemberEditProfile
        value={2}
        member={member}
        changeComponentIndex={changeComponentIndex}
      />
    </OptionalRender>
  );
};

export default Team;
