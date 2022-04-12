import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-weight: bold;
  color: #41518c;
  margin-bottom: 1em;
  display: flex;
  & > .input {
    padding: 0.4em 0.4em;
    padding-left: 0;
    margin-left: 1.7em;
    min-width: 40em;
    max-width: 100%;
    height: 12em;
    resize: none;
    font: inherit;
    padding: 0.4em;
  }
  & > .left-label {
    display: block;
    text-align: right;
    min-width: 15em;
  }
`;

const TextAreaInput = (props) => {
  const labelName = props.labelName || "";
  const placeholder = props.placeholder || `${labelName}...`;
  const onChange = props.labelName || (() => {});

  return (
    <StyledDiv>
      <label className="left-label">{labelName}</label>
      <textarea
        className="input"
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
};

export default TextAreaInput;
