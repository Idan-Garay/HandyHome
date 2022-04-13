import React, { useState } from "react";
import { postFeedback } from "../API/feedback";
import OrderDetails from "../components/Order/OrderDetails";
import Rating from "../components/Order/Rating";

import { useForm, Controller } from "react-hook-form";
import { Box, Page, PageContent, Form, Text, TextArea, Button } from "grommet";

const Feedback = () => {
  const [ratings, setRatings] = useState({
    communication: 0,
    service: 0,
    recommend: 0,
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
    postFeedback({ ratings, description });
    setDescription("");
    setRatings({ communication: 0, service: 0, recommend: 0 });
  };

  return (
    <Page kind="wide">
      <PageContent background="light-3">
        <Form onSubmit={onFormSubmit}>
          <Box width="xlarge" direction="row" pad="medium" justify="evenly">
            <Box>
              <Rating
                ratingLabel="Communication with Seller"
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
              <OrderDetails />
              <Box direction="row" gap="medium" wrap margin={{ top: "1em" }}>
                <Text>
                  <b>Description</b>
                </Text>
                <TextArea
                  value={description}
                  rows={10}
                  width="xlarge"
                  cols={40}
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
        </Form>
      </PageContent>
    </Page>
  );
};

export default Feedback;
