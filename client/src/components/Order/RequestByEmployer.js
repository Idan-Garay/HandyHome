import React, { useState } from "react";
import styled from "styled-components";
import FormTextInputGroup from "../FormTextInput";
import TextAreaInput from "../TextAreaInput";
import BaseButton from "../BaseButton";

import { postRequestByEmployer } from "../../API/order";

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
  const [requestForm, setRequestForm] = useState({
    formType: "request",
    contactNo: "",
    minRate: "",
    description: "",
  });

  const onAnyFormInputChange = (e) => {
    const field = e.target.name;
    const newFormVal = { ...requestForm };
    newFormVal[field] = e.target.value;
    setRequestForm(newFormVal);
  };

  const sendRequest = (e) => {
    e.preventDefault();
    postRequestByEmployer(requestForm);
    setRequestForm({
      formType: "request",
      contactNo: "",
      minRate: "",
      description: "",
    });
  };

  return (
    <RequestForm onSubmit={sendRequest}>
      <div>
        <FormTextInputGroup
          labelName="Contact Number"
          placeholder="09###"
          name="contactNo"
          onChange={onAnyFormInputChange}
          value={requestForm.contactNo}
        />
        <FormTextInputGroup
          labelName="Minimum Daily Rate"
          placeholder="Rate"
          name="minRate"
          onChange={onAnyFormInputChange}
          value={requestForm.minRate}
        />
        <TextAreaInput
          labelName="Request Description"
          name="description"
          onChange={onAnyFormInputChange}
          value={requestForm.description}
        />
        <BaseButton text="Send" />
      </div>
    </RequestForm>
  );
};

export default RequestByEmployer;
