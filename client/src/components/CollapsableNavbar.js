import React, { useContext } from "react";
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
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";

const align = { top: "bottom" };

const StyledDropButton = styled(DropButton)`
  border: none;
`;

const SimpleDropButton = ({ menuList }) => {
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
        dropContent={<DropContent menuList={menuList} onClose={onClose} />}
        dropProps={{ align }}
      />
    </Box>
  );
};

const DropContent = ({ menuList }) => (
  <Box pad="medium">
    <Box direction="row" justify="between" align="center">
      <Nav>
        {menuList.map(({ label, to, onClick }, idx) =>
          onClick ? (
            <Anchor onClick={onClick} label={label} key={idx} />
          ) : (
            <Anchor href={to} label={label} key={idx} />
          )
        )}
      </Nav>
    </Box>
  </Box>
);

const CollapsableNavbar = ({ profileId }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AccountContext);

  const onLogout = () => {
    dispatch({ type: "LOGOUT_ACCOUNT" });
    navigate("/login");
  };

  const menuList = [
    { label: "See Profile", to: `/profiles/${profileId}` },
    { label: "History", to: `/profiles/${profileId}/history` },
    { label: "Log out", onClick: onLogout },
  ];

  return (
    <div>
      <SimpleDropButton menuList={menuList} />
    </div>
  );
};

export default CollapsableNavbar;
