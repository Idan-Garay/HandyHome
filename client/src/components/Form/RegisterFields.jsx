import { Box, Text } from "grommet";
import React from "react";
import { ErrorLabel, StyledTextInput } from "./Index";
import { Controller } from "react-hook-form";

export const fieldsControllers = [
  {
    name: "username",
    rules: { required: true, maxLength: 20, minLength: 5 },
    type: "text",
    errorMessage: null,
  },
  {
    name: "password",
    type: "password",
    rules: null,
    errorMessage: null,
  },
  {
    name: "email",
    type: "email",
    rules: null,
    errorMessage: null,
  },
];

export function RegisterField({ name, control, type, rules, errorMessage }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ? rules : null}
      render={({ field }) => (
        <>
          <Box direction="row" gap="medium" wrap>
            <Text>{name}</Text>
            <StyledTextInput {...field} type={type} />
          </Box>
          <ErrorLabel>{errorMessage}</ErrorLabel>
        </>
      )}
    />
  );
}

export default function RegisterFields({ fieldsControllers, control }) {
  console.log(fieldsControllers);
  return (
    <>
      {fieldsControllers
        ? fieldsControllers.map(
            ({ name, rules, errorMessage, type }, index) => (
              <RegisterField
                key={`rf-${index}`}
                name={name}
                type={type}
                control={control}
                rules={rules ? rules : null}
                errorMessage={errorMessage}
              />
            )
          )
        : "Fields Controllers is not an array."}
    </>
  );
}
