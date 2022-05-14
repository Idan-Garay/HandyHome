import React from "react";
import {
  Anchor,
  Box,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Avatar,
  DropButton,
  Button,
  Heading,
  Text,
} from "grommet";
import { Close } from "grommet-icons";
import styled from "styled-components";

const align = { top: "bottom" };

const StyledDropButton = styled(DropButton)`
  border: none;
`;

const SimpleDropButton = () => {
  const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
  const [open, setOpen] = React.useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Box align="center">
      <StyledDropButton
        border="none"
        label={<Avatar src={src} />}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        dropContent={<DropContent onClose={onClose} />}
        dropProps={{ align }}
      />
    </Box>
  );
};

const DropContent = () => (
  <Box pad="medium">
    <Box direction="row" justify="between" align="center">
      <Nav>
        <Anchor href="#" label="See Profile" />
        <Anchor href="#" label="History" />
        <Anchor href="#" label="Log out" />
      </Nav>
    </Box>
  </Box>
);

const CollapsableNavbar = () => {
  return (
    <div>
      <SimpleDropButton />
    </div>
  );
};

export default CollapsableNavbar;
