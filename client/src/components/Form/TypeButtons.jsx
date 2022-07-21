import React from "react";
import { Box, Text } from "grommet";

export default function TypeButtons({ accType, handleAccType }) {
  const bgColor1 = accType === 0 ? "brand" : "white";
  const bgColor2 = accType === 1 ? "brand" : "white";
  return (
    <Box direction="row" round margin="2em" gap="small">
      <Box
        fill
        round
        background={bgColor1}
        onClick={() => {
          handleAccType(0);
        }}
      >
        <Text color="black">Employer</Text>
      </Box>
      <Box
        fill
        round
        background={bgColor2}
        onClick={() => {
          handleAccType(1);
        }}
      >
        <Text color="black">Handyman</Text>
      </Box>
    </Box>
  );
}
