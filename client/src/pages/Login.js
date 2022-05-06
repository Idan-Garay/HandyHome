import React, { useContext, useState } from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../App";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { serverValidateLoginForm, serverVerifiedUser } from "../API/user";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const ErrorLabel = styled(Text)`
  color: red;
  text-align: left;
`;

const MyController = ({ name, control, errors, type = "text" }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Box direction="row" gap="medium" wrap>
            <Text text>{name}</Text>
            <StyledTextInput {...field} type={type} />
          </Box>
          <ErrorLabel>{errors[name]?.message}</ErrorLabel>
        </>
      )}
    />
  );
};

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().min(8).max(20).required(),
    loggedOn: yup.date().default(() => new Date()),
  })
  .required();

const Login = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AccountContext);

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "12311321",
      email: "xyz@gmail.com",
    },
    resolver: yupResolver(schema),
  });

  const [serverValErr, setServerValErr] = useState(false);
  const [serverVerifyErr, setServerVerifyErr] = useState(false);

  const onSubmit = async () => {
    // do some validation
    // redirect if okay
    // show errors using useform
    const registerForm = getValues();

    // expected boolean value
    const isValid = await serverValidateLoginForm(registerForm);
    const user = await serverVerifiedUser(registerForm.email);

    if (!isValid) {
      setServerValErr(true);
    } else {
      setServerValErr(false);
      if (!user) setServerVerifyErr(true);
      else {
        const { accountType, username, email, profileId } = user;
        dispatch({
          type: "LOGIN_ACCOUNT",
          payload: {
            accountType,
            username,
            email,
            profileId,
            isAuthorized: true,
          },
        });
        navigate("/");
        reset();
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="auto" width={{ min: "large", max: "50%" }}>
        <Box gap="medium">
          <MyController name="email" control={control} errors={errors} />
          <MyController
            name="password"
            control={control}
            errors={errors}
            type="password"
          />

          {serverValErr ? (
            <ErrorLabel>Email or password is incorrect</ErrorLabel>
          ) : null}

          {serverVerifyErr ? (
            <ErrorLabel>Only verified users can login.</ErrorLabel>
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
