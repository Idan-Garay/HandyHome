import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput, Text, Box, TextArea } from "grommet";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

export const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;

export const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

export const StyledBox = (props) => (
  <Box
    direction="row-responsive"
    gap="small"
    height="4em"
    align="center"
    {...props}
  />
);

export const ErrorLabel = styled(Text)`
  color: red;
  text-align: left;
`;

export const useMyForm = ({ schema, defaultValues }) => {
  return useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
};

export function ControllerField({ name, control, type, rules, errorMessage }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ? rules : null}
      render={({ field }) => (
        <>
          <Box direction="row" gap="medium" wrap>
            <Text>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
            <StyledTextInput {...field} type={type} />
          </Box>
          <ErrorLabel>{errorMessage}</ErrorLabel>
        </>
      )}
    />
  );
}

export function ControllerFields({ fieldsControllers, control }) {
  return (
    <>
      {fieldsControllers
        ? fieldsControllers.map(
            ({ name, rules, errorMessage, type }, index) => (
              <ControllerField
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
