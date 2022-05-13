import React, { useContext, useState } from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { AccountContext } from "../App";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  login,
  serverValidateLoginForm,
  serverVerifiedUser,
} from "../API/user";
import LoadingScreen from "../components/LoadingScreen";

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
  const { accountState, dispatch } = useContext(AccountContext);

  if (accountState && accountState.isAuthorized)
    return <Navigate to="/" replace />;

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const [err, setErr] = useState({});
  const [loadSpinner, setLoadSpinner] = useState(false);

  const onSubmit = async () => {
    const loginForm = getValues();

    // expected errors messages or {}
    let result = await login(loginForm);

    if (
      !result.errors.email &&
      !result.errors.password &&
      !result.errors.verified
    ) {
      setLoadSpinner(true);
      setTimeout(() => {
        dispatch({ type: "LOGIN_ACCOUNT", payload: result.user });
        setLoadSpinner(false);
        navigate("/");
      }, 1000);
      reset();
    } else {
      setErr(result.errors);
    }
  };

  return (
    <>
      {loadSpinner ? (
        <LoadingScreen />
      ) : (
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

              {err.email !== undefined ? (
                <ErrorLabel>{err.email}</ErrorLabel>
              ) : null}

              {err.password !== undefined ? (
                <ErrorLabel>{err.password}</ErrorLabel>
              ) : null}

              {err.verified !== undefined ? (
                <ErrorLabel>{err.verified}</ErrorLabel>
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
      )}
    </>
  );
};

export default Login;
