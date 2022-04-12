import React from "react";
import styled from "styled-components";
import FormTextInputGroup from "../FormTextInput";
import TextAreaInput from "../TextAreaInput";
import BaseButton from "../BaseButton";

const RequestForm = styled.form`
  margin: 1em;
  padding: 1em;
  padding-top: 3em;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 30em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > .left {
    min-width: 35%;
  }
  & > .b-1 {
    border: 1px solid black;
  }
`;

const RequestByEmployer = () => {
  return (
    <RequestForm>
      <div>
        <FormTextInputGroup labelName="Contact Number" placeholder="09###" />
        <FormTextInputGroup labelName="Minimum Daily Rate" placeholder="Rate" />
        <TextAreaInput labelName="Request Description" />
        <BaseButton text="Send" onClick={() => {}} />
      </div>
    </RequestForm>
  );
};

export default RequestByEmployer;
