import React, { useState } from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { serverValidateLoginForm } from "../API/user";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const ErrorLabel = styled(Text)`
  color: red;
  text-align: left;
`;

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(8).max(20).required(),
    loggedOn: yup.date().default(() => new Date()),
  })
  .required();

const Login = () => {
  let navigate = useNavigate();

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "xzy12345",
      email: "garayidan@gmail.com",
    },
    resolver: yupResolver(schema),
  });

  const [serverValErr, setServerValErr] = useState(false);

  const onSubmit = async () => {
    // do some validation
    // redirect if okay
    // show errors using useform
    const registerForm = getValues();

    // expected boolean value
    const isValid = await serverValidateLoginForm(registerForm);

    if (!isValid) {
      setServerValErr(true);
    } else {
      setServerValErr(false);
      navigate("/");
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="auto" width={{ min: "large", max: "50%" }}>
        <Box gap="medium">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <Box direction="row" gap="medium" wrap>
                  <Text text>Email</Text>
                  <StyledTextInput {...field} />
                </Box>
                <ErrorLabel>{errors.email?.message}</ErrorLabel>
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

          {serverValErr ? (
            <ErrorLabel>Email or password is incorrect</ErrorLabel>
          ) : null}
        </Box>
        <Box
          tag="footer"
          margin={{ top: "medium" }}
          direction="row"
          justify="end"
        >
          <Button type="submit" primary label="Login" />
        </Box>
      </Box>
    </Form>
  );
};

export default Login;
