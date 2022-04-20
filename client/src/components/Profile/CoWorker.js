import React from "react";
import { User, Map } from "grommet-icons";
import { Box, Text, Avatar } from "grommet";
import styled from "styled-components";

const StyledH2 = styled.h2`
  text-align: left;
`;

const CoWorker = () => {
  return (
    <Box
      direction="row-responsive"
      width="full"
      margin="auto"
      background="white"
      pad="small"
      round="small"
    >
      <Box
        gap="small"
        direction="column"
        align="center"
        width={{ min: "medium" }}
      >
        <Avatar size="xlarge" background="accent-3">
          <User size="large" />
        </Avatar>
        <Box
          width={{ min: "75%", max: "90%" }}
          direction="row"
          justify="between"
          fill="horizontal"
        >
          <Box direction="row-responsive" gap="small">
            <Box direction="row">
              <Map />
              <Text color="gray">From</Text>
            </Box>
          </Box>
          <Text textAlign="right"> Area 1</Text>
        </Box>
      </Box>
      <Box
        justify="start"
        pad="small"
        align="start"
        gap="small"
        fill="horizontal"
        wrap
      >
        <StyledH2>Hildevon von Knechtbert</StyledH2>
        <Text as="h4" color="gray">
          masonry, construction, gardener
        </Text>
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

export default CoWorker;
