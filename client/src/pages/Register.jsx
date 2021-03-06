import React, { useState } from "react";
import { Box, Form, Button } from "grommet";
import { registerUser } from "../API/user";

import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { ErrorLabel, ControllerFields } from "../components/Form/Index";

import { useRegisterForm } from "../components/Form/registerForm";
import TypeButtons from "../components/Form/TypeButtons";
import { fieldsControllers } from "../components/Form/registerForm";

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
              <ControllerFields
                fieldsControllers={fieldsControllers.map((fieldData) => {
                  fieldData.errorMessage = errors[fieldData.name]?.message;
                  return fieldData;
                })}
                control={control}
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
