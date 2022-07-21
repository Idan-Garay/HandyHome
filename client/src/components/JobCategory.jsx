import React from "react";
import { Box, Text } from "grommet";

const JobCategory = ({ text = "All", Figure, isSelected, handleClick }) => {
  const bgColor = isSelected ? "#a9a9a9" : "white";
  return (
    <Box
      direction="row-responsive"
      height="3em"
      align="center"
      gap="small"
      text={text.toLowerCase()}
      background={bgColor}
      cursor="pointer"
      onClick={() => {
        handleClick(text);
      }}
    >
      <Box width="xsmall" align="center">
        {Figure && <img src={Figure} alt="Plumber" height="30" width="30" />}
      </Box>
      <Box direction="row">
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

export default JobCategory;
