import React from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { registerUser } from "../API/user";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const Register = () => {
  const { handleSubmit, control, getValues, reset } = useForm({
    defaultValues: { username: "", password: "", email: "" },
  });

  const onSubmit = () => {
    const registerForm = getValues();

    registerUser(registerForm);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="auto" width={{ min: "medium", max: "50%" }}>
        <Box gap="medium">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Box direction="row" gap="medium" wrap>
                <Text text>Username</Text>
                <StyledTextInput {...field} />
              </Box>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Box direction="row" gap="medium" wrap>
                <Text>Password</Text>
                <StyledTextInput type="password" {...field} />
              </Box>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Box direction="row" gap="medium" wrap>
                <Text>Email</Text>
                <StyledTextInput {...field} />
              </Box>
            )}
          />
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
