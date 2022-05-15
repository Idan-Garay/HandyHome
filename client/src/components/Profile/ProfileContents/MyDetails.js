import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "grommet-icons";
import { Box, Text, Button, Avatar, Heading, Main } from "grommet";
import EditProfile from "../../../pages/profile/EditProfile";
import UserProfile from "./UserProfile";

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

const MyDetails = ({ myDetailsData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => setIsEdit(true);

  const toPassProps = {
    onEdit: onEdit,
    setIsEdit,
  };

  return (
    <div>
      {isEdit ? (
        <EditProfile {...toPassProps} {...myDetailsData} />
      ) : (
        <UserProfile {...toPassProps} {...myDetailsData} />
      )}
    </div>
  );
};

export default MyDetails;
