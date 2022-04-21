import React from "react";
import { Box, Text } from "grommet";
import styled from "styled-components";

const StyledH2 = styled.h2`
  text-align: left;
`;

const ProfileDetail = ({ service, name }) => {
  return (
    <Box
      justify="start"
      pad="small"
      align="start"
      gap="small"
      fill="horizontal"
      wrap
    >
      <StyledH2 className="textAlignLeft">{name}</StyledH2>
      <Text as="h4" color="gray" textAlign="start">
        {service}
      </Text>
      <Box fill="horizontal" wrap>
        <Text as="p" textAlign="start">
          Brokers and traders and money moves field bet customer value chain
          emerging markets piker embracing ingenuity. Mortgage the colour of
          money block chain transactions makin' chedda and money moves discount
          window lending bitcoin protocol short traders. Billionaire hedge fund
          manager earnings bear market all ab afdsfsdf
        </Text>
      </Box>
    </Box>
  );
};

export default ProfileDetail;
