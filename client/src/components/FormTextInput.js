import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-weight: bold;
  color: #41518c;
  margin-bottom: 1em;
  display: flex;
  & > .input {
    padding: 0.4em 0.4em;
    margin-left: 2em;
  }
  & > .left-label {
    display: block;
    text-align: right;
    min-width: 15em;
  }
`;

const FormTextInputGroup = (props) => {
  const labelName = props.labelName || "";
  const name = props.name || "";
  const placeholder = props.labelName || "";
  const onChange = props.onChange;
  const value = props.value;

  return (
    <StyledDiv>
      <label className="left-label">{labelName}</label>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        name={name}
        defaultValue={value}
        onChange={onChange}
      />
    </StyledDiv>
  );
};

export default FormTextInputGroup;
