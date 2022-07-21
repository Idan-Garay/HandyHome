import React, { useState } from "react";
import { Box, Form, Text, Button } from "grommet";
import { Controller } from "react-hook-form";
import { registerUser } from "../API/user";

import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { StyledTextInput, ErrorLabel } from "../components/Form/Index";

import { useRegisterForm } from "../components/Form/SchemaValidation";
import TypeButtons from "../components/Form/TypeButtons";

const Register = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useRegisterForm();

  const [accType, setAccType] = useState(0);

  const [result, setResult] = useState({});
  const [loadSpinner, setLoadSpinner] = useState(false);

  const handleAccType = (type = 0) => {
    setAccType(type);
  };

  const onSubmit = async () => {
    const registerForm = getValues();

    let res = await registerUser(registerForm, accType);
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
                      <Text>Username</Text>
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
            <TypeButtons accType={accType} handleAccType={handleAccType} />
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
