import React, { useState } from "react";
import { Form, Button, Box, Text, TextArea } from "grommet";
import Rating from "./Rating";
import OrderDetails from "./OrderDetails";
import { postFeedback } from "../../API/feedback";
import { useNavigate } from "react-router-dom";

const HandymanFeedback = (props) => {
  const navigate = useNavigate();
  const { showData } = props.state;

  const [ratings, setRatings] = useState({
    experience: 0,
  });

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
      type: "HandymanToEmployer",
      ratings,
      description,
      orderId: showData.id,
    });
    setDescription("");
    setRatings({ experience: 0 });
    navigate("-1");
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Text as="h1" size="xlarge">
        Handyman's Feedback
      </Text>
      <Box width="fill" direction="row" pad="medium" justify="center" wrap>
        <Box>
          <Rating
            ratingLabel="Rate your experience"
            onClick={onRate}
            ratingName="experience"
            rate={ratings.experience}
          />
          <Box direction="column" gap="xxsmall" wrap margin={{ top: "1em" }}>
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

        {/* <Box direction="column">
          <OrderDetails showData={showData} />
        </Box> */}
      </Box>
    </Form>
  );
};

export default HandymanFeedback;
