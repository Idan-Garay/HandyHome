import React from "react";
import { Box, Button, Avatar, TextArea, TextInput, Text } from "grommet";
import { Projects, Clock, User } from "grommet-icons";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const ProfileEdit = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      contactNo: "",
      services: "",
      description: "",
      picture: "",
    },
  });

  return (
    <Box className="b-1" direction="row" fill="vertical">
      <Box direction="row">
        <Box
          className="b-1"
          direction="column"
          gap="medium"
          margin={{ left: "3em" }}
        >
          <ProfileField name="name" control={control} text="Name" />
          <ProfileField
            name="contactNo"
            control={control}
            text="Contact Number"
          />
          <ProfileField name="services" control={control} text="Services" />
          <ProfileField
            name="description"
            control={control}
            text="Description"
            textArea
          />
          <Button type="submit" fill="horizontal" primary label="Request" />
        </Box>
        <Avatar size="xlarge" background="accent-3" margin={{ left: "3em" }}>
          <User size="large" />
        </Avatar>
      </Box>
      <Box className="b-1" margin={{ left: "15em" }}>
        <h4>List of Profiles</h4>
      </Box>
    </Box>
  );
};

export default ProfileEdit;
