import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Text,
  Button,
  Form,
  TextInput,
  TextArea,
  Avatar,
  Layer,
  Image,
} from "grommet";
import { User as UserIcon } from "grommet-icons";
import { useForm, Controller } from "react-hook-form";
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

const AddMember = () => {
  const navigate = useNavigate();
  const primaryProfileId = useLocation().state?.primaryProfileId;

  useEffect(() => {
    if (!primaryProfileId) navigate(-1);
  }, []);

  const { control, reset, getValues, handleSubmit } = useForm({
    defaultValues: {
      name: "Ray Moon",
      contactNo: "09660327558",
      services: "masonry",
      description: "Wall Fix",
      picture: "",
      email: "raymoon@gmail.com",
      street: "street 1",
      city: "city 1",
      area: "area 1",
    },
  });
  const handleGoBack = () => {
    navigate(-1);
  };

  const addMember = async (newMemberData, primaryProfileId) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newMemberData, primaryProfileId }),
    };
    const res = await fetch(
      `http://localhost:3501/profile/team/add`,
      requestOptions
    );
    navigate(`/profile`);
  };

  const onAddMember = async (data) => {
    const {
      name,
      contactNo,
      services,
      description,
      email,
      picture,
      ...address
    } = data;
    const profile = { name, contactNo, services, description, picture, email };
    const res = await addMember({ address, profile }, primaryProfileId);
  };

  return (
    <Box
      pad="medium"
      gap="small"
      fill="vertical"
      justify="center"
      align="center"
    >
      <Form onSubmit={handleSubmit(onAddMember)}>
        <Box
          className="b-1"
          gap="medium"
          width="large"
          background="#efefef"
          round
          pad="small"
        >
          <ProfileField name="name" control={control} text="Name" />
          <ProfileField name="email" control={control} text="Email" />
          <ProfileField
            name="contactNo"
            control={control}
            text="Contact Number"
          />
          <ProfileField name="services" control={control} text="Services" />
          <ProfileField name="street" control={control} text="Street" />
          <ProfileField name="city" control={control} text="City" />
          <ProfileField name="area" control={control} text="Area" />
          <ProfileField
            name="description"
            control={control}
            text="Description"
            textArea
          />
          <Box direction="row" gap="medium" justify="end">
            <Button plain label="Cancel" onClick={handleGoBack} />
            <Button primary label="Add" type="submit" />
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export default AddMember;
