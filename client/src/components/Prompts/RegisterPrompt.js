import React from "react";
import { Checkmark } from "grommet-icons";
import { Box, Text } from "grommet";
import { Link } from "react-router-dom";

const RegisterPrompt = () => {
  return (
    <Box gap="medium" pad="xlarge" align="center" round margin="auto">
      <Checkmark size="xlarge" color="brand" />
      <h1 as="h1">Registration was successful!</h1>
      <Text as="p" color="gray">
        Confirmation was sent to your email
      </Text>
      <Text as="p" color="gray">
        You'll be redirected after 5 seconds or{" "}
        <Link to="/login">click here</Link>
      </Text>
    </Box>
  );
};

export default RegisterPrompt;
