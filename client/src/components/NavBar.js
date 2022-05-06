import React, { useContext } from "react";
import { Box } from "grommet";
import { Tools } from "grommet-icons";
import { NavLink, useMatch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AccountContext } from "../App";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #00c9aa;
`;

const LoginOrRegisterButton = ({ isLoginPage }) => {
  return (
    <>
      {isLoginPage ? (
        <StyledNavLink to="/register" weight="normal">
          Register
        </StyledNavLink>
      ) : (
        <StyledNavLink to="/login" weight="normal">
          Login
        </StyledNavLink>
      )}
    </>
  );
};

const AuthorizedNavButtons = ({ isAuthorized, isLoginPage, profId }) => {
  return (
    <Box>
      {isAuthorized ? (
        <StyledNavLink to={`/profile/${profId}`} weight="normal">
          Profile
        </StyledNavLink>
      ) : (
        <LoginOrRegisterButton isLoginPage={isLoginPage} />
      )}
    </Box>
  );
};

const NavBar = () => {
  const isLoginPage = useLocation().pathname === "/login" ? true : false;
  const { accountState } = useContext(AccountContext);
  const { isAuthorized, profId } = accountState;

  return (
    <>
      <Box pad="xxsmall">
        <StyledNavLink to="/" icon={<Tools color="accent-4" size="large" />} />
      </Box>
      <Box justify="evenly" direction="row" width="medium">
        <Box>
          <StyledNavLink to="/">Discover</StyledNavLink>
        </Box>
        <AuthorizedNavButtons
          isAuthorized={isAuthorized}
          isLoginPage={isLoginPage}
          profId={profId}
        />
      </Box>
    </>
  );
};

export default NavBar;
