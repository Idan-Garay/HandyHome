import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  border-top: 1px solid #e5e5e5;
  height: 8%;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        <b>Copyright © HandyWork 2022. All Rights Reserved.</b>
      </span>
    </StyledFooter>
  );
};

export default Footer;
