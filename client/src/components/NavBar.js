import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  min-height: 10%;
  max-width: 100%;
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  max-width: 25%;
  width: 20%;
  border: 1px solid black;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const MenuSection = styled.ul`
  border: 1px solid black;
  display: flex;
  min-width: 40%;
  list-style-type: none;
  & > li {
    border: 1px solid black;
    border-radius: 25px;
    min-width: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <LogoSection>
        <img src="#" alt="Logo" />
      </LogoSection>
      <MenuSection>
        <li>
          <a href="##">Discover</a>
        </li>
        <li>
          <a href="##">List</a>
        </li>
        <li>
          <a href="##">Register</a>
        </li>
      </MenuSection>
    </StyledNavBar>
  );
};

export default NavBar;
