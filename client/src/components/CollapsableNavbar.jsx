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
import { Close, User as UserIcon } from "grommet-icons";
import styled from "styled-components";
import { AccountContext } from "../App";
import { useNavigate } from "react-router-dom";

const align = { top: "bottom" };

const StyledDropButton = styled(DropButton)`
  border: none;
`;

const MyAvatar = ({ src }) => {
  console.log(src);
  return (
    <>
      {src ? (
        <Avatar src={src} />
      ) : (
        <Avatar background="accent-3">
          <UserIcon color="black" />
          <img src="/HandyHome.svg" />
        </Avatar>
      )}
    </>
  );
};

const SimpleDropButton = ({ menuList }) => {
  const { accountState } = useContext(AccountContext);
  const src = accountState.picture;
  const [open, setOpen] = React.useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Box align="center">
      <StyledDropButton
        border="none"
        label={<MyAvatar src={src} />}
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
  const { accountState, dispatch } = useContext(AccountContext);
  console.log(accountState, "here");
  const onLogout = () => {
    dispatch({ type: "LOGOUT_ACCOUNT" });
    navigate("/login");
  };

  const menuList = [
    { label: "See Profile", to: `/profile` },
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
