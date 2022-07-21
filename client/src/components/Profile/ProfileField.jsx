import React from "react";
import { Box, Text } from "grommet";
import { Controller } from "react-hook-form";
import {
  StyledTextArea,
  StyledTextInput,
} from "../../pages/profile/EditProfile";

export default function ProfileField({
  name,
  control,
  text,
  textArea = false,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box direction="row" gap="medium" wrap>
          <Text text>{text}</Text>
          {textArea ? (
            <StyledTextArea rows={5} resize={false} {...field} />
          ) : (
            <StyledTextInput {...field} />
          )}
        </Box>
      )}
    />
  );
}
