import React, { useContext } from "react";
import { Box } from "grommet";
import { Tools } from "grommet-icons";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import CollapsableNavbar from "./CollapsableNavbar";

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

const AuthorizedNavButtons = ({ isAuthorized, isLoginPage, profileId }) => {
  return (
    <Box>
      {isAuthorized ? (
        // <StyledNavLink to={`/profiles/${profileId}`} weight="normal">
        //   Profile
        // </StyledNavLink>
        <CollapsableNavbar />
      ) : (
        <LoginOrRegisterButton isLoginPage={isLoginPage} />
      )}
    </Box>
  );
};

const NavBar = ({ isAuthorized, id }) => {
  const isLoginPage = useLocation().pathname === "/login" ? true : false;

  return (
    <>
      <Box pad="xxsmall">
        <StyledNavLink to="/">
          <Tools color="accent-4" size="large" />
        </StyledNavLink>
      </Box>
      <Box justify="evenly" direction="row" width="18em">
        <Box direction="row" align="center">
          <StyledNavLink to="/">Discover</StyledNavLink>
        </Box>
        <AuthorizedNavButtons
          isAuthorized={isAuthorized}
          isLoginPage={isLoginPage}
          profileId={id}
        />
      </Box>
    </>
  );
};

export default NavBar;
