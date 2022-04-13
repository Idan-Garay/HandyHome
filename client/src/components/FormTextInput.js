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

const FormTextInputGroup = ({
  labelName,
  name,
  placeholder,
  register,
  required = false,
}) => {
  return (
    <StyledDiv>
      <label className="left-label">{labelName}</label>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        {...register(name, { required: required })}
      />
    </StyledDiv>
  );
};

export default FormTextInputGroup;
