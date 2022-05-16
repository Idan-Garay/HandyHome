import React, { useEffect, useState } from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { registerUser } from "../API/user";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

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
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "Joshzxy",
      password: "xzy12345",
      email: "garayidan@gmail.com",
    },
    resolver: yupResolver(schema),
  });

  const [result, setResult] = useState({});
  const [loadSpinner, setLoadSpinner] = useState(false);

  const onSubmit = async () => {
    const registerForm = getValues();

    let res = await registerUser(registerForm);
    res = await res.json();
    setResult(res);
    if (res.success !== undefined) {
      setLoadSpinner(true);
      setTimeout(() => {
        navigate("/register/success");
        setLoadSpinner(false);
      }, 1000);
      reset();
    }
  };

  return (
    <>
      {loadSpinner ? (
        <LoadingScreen />
      ) : (
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
              {result.email || result.username ? (
                <ErrorLabel>Username or email already exists.</ErrorLabel>
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
      )}
    </>
  );
};

export default Register;
