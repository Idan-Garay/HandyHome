import React, { useState } from "react";
import { Form, Button, Box, Text, TextArea } from "grommet";
import Rating from "./Rating";
import OrderDetails from "./OrderDetails";
import { postFeedback } from "../../API/feedback";

const EmployerFeedback = (props) => {
  const [ratings, setRatings] = useState({
    communication: 0,
    service: 0,
    recommend: 0,
  });
  const { showData } = props.state;

  const [description, setDescription] = useState("");

  const onTextAreaChange = (e) => {
    setDescription(e.target.value);
  };

  const onRate = (e) => {
    const field = e.target.name;
    const newRatings = { ...ratings };
    newRatings[field] = e.target.value;
    setRatings(newRatings);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    postFeedback({
      type: "EmployerToHandyman",
      ratings,
      description,
      orderId: showData.id,
    });
    setDescription("");
    setRatings({ communication: 0, service: 0, recommend: 0 });
    navigate("-1");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Text as="h1" size="xlarge">
        Employer's Feedback
      </Text>
      <Box width="xlarge" direction="row" pad="medium" justify="evenly" wrap>
        <Box>
          <Rating
            ratingLabel="Communication with Handyman"
            onClick={onRate}
            ratingName="communication"
            rate={ratings.communication}
          />
          <Rating
            ratingLabel="Service as described"
            onClick={onRate}
            ratingName="service"
            rate={ratings.service}
          />
          <Rating
            ratingLabel="Buy again or recommend"
            onClick={onRate}
            ratingName="recommend"
            rate={ratings.recommend}
          />
        </Box>
        <Box direction="column">
          {/* <OrderDetails /> */}
          <Box direction="column" gap="xxsmall" wrap>
            <Text textAlign="start" weight={500}>
              Description
            </Text>
            <Box background="#f8f8f8">
              <TextArea
                value={description}
                rows={10}
                width="xlarge"
                cols={50}
                resize={false}
                onChange={onTextAreaChange}
              />
            </Box>
          </Box>

          <Box
            tag="footer"
            margin={{ top: "medium" }}
            direction="row"
            justify="end"
          >
            <Button type="submit" primary label="Send" />
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default EmployerFeedback;
