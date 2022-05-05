import React from "react";
import { Box } from "grommet";
import { Tools } from "grommet-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #00c9aa;
`;

const NavBar = () => {
  return (
    <>
      <Box pad="xxsmall">
        <StyledNavLink to="/" icon={<Tools color="accent-4" size="large" />} />
      </Box>
      <Box justify="evenly" direction="row" width="medium">
        <Box>
          <StyledNavLink to="/">Discover</StyledNavLink>
        </Box>
        <Box>
          <StyledNavLink to="/login" weight="normal">
            Login
          </StyledNavLink>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
