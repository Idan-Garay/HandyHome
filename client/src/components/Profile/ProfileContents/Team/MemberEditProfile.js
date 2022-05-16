import React from "react";
import { User } from "grommet-icons";
import {
  Box,
  Text,
  Button,
  Avatar,
  Heading,
  TextInput,
  TextArea,
  Form,
} from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { patchProfile } from "../../../../API/profiles";

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

const MemberEditProfile = ({ member, changeComponentIndex }) => {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: { ...member },
  });

  const onSave = (data) => {
    patchProfile({ ...data, id: member.id });
    changeComponentIndex(1);
  };

  const onCancel = () => {
    reset();
    changeComponentIndex(1);
  };

  return (
    <>
      <Box direction="column" pad="small" margin={{ top: "2em" }}>
        <Form onSubmit={handleSubmit(onSave)}>
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
                  <Button primary label="Save" type="submit" />
                </Box>
              </Box>
            </Box>
          </StyledBox>
          <Box margin={{ top: "2em" }} gap="medium">
            <ProfileField name="name" control={control} text="Name" />
            <ProfileField name="email" control={control} text="Email" />
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
          </Box>
        </Form>
      </Box>
    </>
  );
};

export default MemberEditProfile;
