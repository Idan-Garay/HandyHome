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
    min-width: 30em;
    max-width: 100%;
    height: 12em;
    resize: none;
    font: inherit;
    font-weight: normal;
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
  const name = props.name || "";
  const placeholder = props.placeholder || `${labelName}...`;
  const onChange = props.onChange || (() => {});
  const value = props.value || "";

  return (
    <StyledDiv>
      <label className="left-label">{labelName}</label>
      <textarea
        className="input"
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        defaultValue={value}
      />
    </StyledDiv>
  );
};

export default TextAreaInput;
