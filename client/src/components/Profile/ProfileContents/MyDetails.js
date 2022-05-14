import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "grommet-icons";
import { Box, Text, Button, Avatar, Heading, Main } from "grommet";
import EditProfile from "../../../pages/profile/EditProfile";

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

const UserProfile = ({ onEdit }) => {
  return (
    <>
      <Box direction="column" pad="small">
        <StyledBox height="small" align="end">
          <Box
            direction="row"
            gap="medium"
            fill="horizontal"
            pad={{ left: "3em" }}
          >
            <Box>
              <Avatar className="b-1" size="large" pad="3px">
                {true && <User color="black" />}
              </Avatar>
            </Box>
            <Box align="start">
              <Heading level={3}>Name</Heading>
              <Heading level={6} color="gray">
                UserName
              </Heading>
            </Box>
            <Box margin={{ left: "60%" }} justify="center">
              <Button primary label="Edit Profile" onClick={onEdit} />
            </Box>
          </Box>
        </StyledBox>

        <Main margin={{ top: "2em" }}>
          <StyledBox gap="medium">
            <LabelText>Services </LabelText>
            <Text>Masonry, Gardening</Text>
          </StyledBox>
          <StyledBox gap="8em" direction="row">
            <Box direction="row" gap="medium">
              <LabelText>Contact Number </LabelText>
              <Text>096342341324</Text>
            </Box>
            <Box direction="row" gap="medium">
              <LabelText>Email</LabelText>
              <Text>handyman@gmail.com</Text>
            </Box>
          </StyledBox>
          <StyledBox gap="medium">
            <LabelText>Description</LabelText>
            <Text>handyman@gmail.com</Text>
          </StyledBox>
          <StyledBox>Feedbacks</StyledBox>
        </Main>
      </Box>
    </>
  );
};

const MyDetails = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => setIsEdit(true);
  const onCancel = () => setIsEdit(false);
  const onSave = () => setIsEdit(false);

  const editButtons = {
    onEdit: onEdit,
    onCancel: onCancel,
    onSave: onSave,
  };

  return (
    <div>
      {isEdit ? (
        <EditProfile {...editButtons} />
      ) : (
        <UserProfile {...editButtons} />
      )}
    </div>
  );
};

export default MyDetails;
