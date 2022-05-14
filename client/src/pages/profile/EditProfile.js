import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "grommet-icons";
import {
  Box,
  Text,
  Button,
  Avatar,
  Heading,
  Main,
  TextInput,
  TextArea,
} from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { patchProfile } from "../../API/profiles";

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

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const ProfileField = ({ name, control, text, textArea = false }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box direction="row" gap="medium" wrap>
          <Text text>{text}</Text>
          {textArea ? (
            <StyledTextArea rows={5} resize={false} {...field} />
          ) : (
            <StyledTextInput {...field} />
          )}
        </Box>
      )}
    />
  );
};

const EditProfile = ({ onEdit, setIsEdit, id }) => {
  const navigate = useNavigate();

  const { control, reset, getValues } = useForm({
    defaultValues: {
      name: "Full name",
      contactNo: "096342341324",
      services: "masonry,gardening",
      description: "Able to fix walls and clean gardens",
      picture: "",
      email: "handyman@gmail.com",
    },
  });

  const onSave = () => {
    const updateData = getValues();
    patchProfile({ ...updateData, id });
    setIsEdit(false);
  };

  const onCancel = () => {
    reset();
    setIsEdit(false);
  };

  const navigateToEditPage = () => {
    navigate("edit");
  };

  const onSaveEdit = () => {
    navigate("/");
  };

  return (
    <>
      <Box direction="column" pad="small" margin={{ top: "2em" }}>
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
            <Box margin={{ left: "60%" }} direction="row" justify="center">
              <Box>
                <Button primary label="Cancel" onClick={onCancel} />
              </Box>
              <Box>
                <Button primary label="Save" onClick={onSave} />
              </Box>
            </Box>
          </Box>
        </StyledBox>

        <Main margin={{ top: "2em" }} gap="medium">
          <ProfileField name="name" control={control} text="name" />
          <ProfileField name="services" control={control} text="Services" />
          <ProfileField
            name="description"
            control={control}
            text="Description"
            textArea
          />
        </Main>
      </Box>
    </>
  );
};

export default EditProfile;
