import React from "react";
import { Box, Form, TextInput, Text, Button } from "grommet";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

const Login = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = () => {
    console.log("hello world");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="auto" width={{ min: "large", max: "50%" }}>
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
