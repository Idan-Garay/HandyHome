import React, { useEffect } from "react";
import { Checkmark } from "grommet-icons";
import { Box, Text } from "grommet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "animate.css";

const RegisterPrompt = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <Box gap="medium" pad="xlarge" align="center" round margin="auto">
      <Checkmark
        size="xlarge"
        color="brand"
        className="animate__animated animate__bounceIn"
      />
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
