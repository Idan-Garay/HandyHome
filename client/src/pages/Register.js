import React, { useState } from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import {
  isEmailRegistered,
  registerUser,
  serverValidateRegisterForm,
} from "../API/user";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const ErrorLabel = styled(Text)`
  color: red;
  text-align: left;
`;

const schema = yup
  .object({
    username: yup.string().min(5).max(20).required(),
    password: yup.string().min(8).max(20).required(),
    email: yup.string().email(),
    createdOn: yup.date().default(() => new Date()),
  })
  .required();

const Register = () => {
  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const [serverValErr, setServerValErr] = useState(false);

  const onSubmit = async () => {
    const registerForm = getValues();

    const resultError = await serverValidateRegisterForm(registerForm);
    const keysLength = Object.keys(resultError).length;
    if (keysLength > 0) {
      setServerValErr(true);
    } else {
      setServerValErr(false);
      registerUser(registerForm);
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="auto" width={{ min: "medium", max: "50%" }}>
        <Box gap="medium">
          <Controller
            name="username"
            control={control}
            rules={{ required: true, maxLength: 20, minLength: 5 }}
            render={({ field }) => (
              <>
                <Box direction="row" gap="medium" wrap>
                  <Text text>Username</Text>
                  <StyledTextInput {...field} />
                </Box>
                <ErrorLabel>{errors.username?.message}</ErrorLabel>
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <>
                <Box direction="row" gap="medium" wrap>
                  <Text>Password</Text>
                  <StyledTextInput type="password" {...field} />
                </Box>
                <ErrorLabel>{errors.password?.message}</ErrorLabel>
              </>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <Box direction="row" gap="medium" wrap>
                  <Text>Email</Text>
                  <StyledTextInput {...field} />
                </Box>
                <ErrorLabel>{errors.username?.message}</ErrorLabel>
              </>
            )}
          />
          {serverValErr ? (
            <ErrorLabel>Username or email is already used.</ErrorLabel>
          ) : null}
        </Box>
        <Box
          tag="footer"
          margin={{ top: "medium" }}
          direction="row"
          justify="end"
        >
          <Button type="submit" primary label="Register" />
        </Box>
      </Box>
    </Form>
  );
};

export default Register;
