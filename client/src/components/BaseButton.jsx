import React from "react";
import styled from "styled-components";

const StyledBaseButton = styled.button`
  min-width: 4em;
  background-color: #0a1844;
  color: white;
  border: none;
  padding: 0.4em 1.3em;
  font-weight: bolder;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    border: inset;
  }
  float: right;
`;

const BaseButton = ({ text, onClick = () => {} }) => {
  return <StyledBaseButton onClick={onClick}>{text}</StyledBaseButton>;
};

export default BaseButton;
