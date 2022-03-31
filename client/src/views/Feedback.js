import React from "react";
import styled from "styled-components";
import BaseButton from "../components/BaseButton";
import OrderDetails from "../components/OrderDetails";
import Rating from "../components/Rating";

const FeedBackForm = styled.form`
  margin: 1em;
  padding: 1em;
  padding-top: 3em;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 30em;
  display: flex;
  & > .left {
    min-width: 35%;
  }
`;

const TextAreaSection = styled.div`
  color: #41518c;
  margin-top: 1em;
  text-align: left;
  & > textarea {
    min-width: 40em;
    max-width: 100%;
    height: 12em;
    resize: none;
    font: inherit;
    padding: 5px;
    margin-top: 0.3em;
  }
`;

const Feedback = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FeedBackForm onSubmit={onFormSubmit}>
      <div className="left">
        <Rating ratingLabel="Communication with Seller" />
        <Rating ratingLabel="Service as described" />
        <Rating ratingLabel="Buy again or recommend" />
      </div>
      <div className="right">
        <OrderDetails />
        <TextAreaSection>
          <h3>What can you say about the service?</h3>
          <textarea placeholder="Type your message here..."></textarea>
        </TextAreaSection>
        <BaseButton text="Send" className="justify-right" />
      </div>
    </FeedBackForm>
  );
};

export default Feedback;
