import React, { useContext } from "react";
import { Box, Button, Heading, TextArea, TextInput, Text } from "grommet";
import { useForm, Controller } from "react-hook-form";
import { postRequestByEmployer } from "../../API/order";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountContext } from "../../App";

const StyledTextInput = styled(TextInput)`
  background-color: #f8f8f8;
`;
const StyledTextArea = styled(TextArea)`
  background-color: #f8f8f8;
`;

const RequestByEmployer = () => {
  const navigate = useNavigate();
  const { profileId, contactNo } = useLocation().state;
  const { accountState } = useContext(AccountContext);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      formType: "request",
      contactNo: contactNo,
      minRate: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    const input = { id: accountState.id, to: profileId, ...data };

    postRequestByEmployer(input);
    reset();
    navigate(`/profiles/${profileId}`);
  };

  return (
    <Box align="center">
      <Box width="large" margin="large" gap="small">
        <Heading margin={{ bottom: "0.5em" }}>Request Form</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box gap="medium">
            <Controller
              name="contactNo"
              control={control}
              render={({ field }) => (
                <Box direction="row" gap="medium" wrap>
                  <Text text>Contact Number</Text>
                  <StyledTextInput {...field} />
                </Box>
              )}
            />
            <Controller
              name="minRate"
              control={control}
              render={({ field }) => (
                <Box direction="row" gap="medium" wrap>
                  <Text>Minimum Daily Rate</Text>
                  <StyledTextInput {...field} />
                </Box>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Box direction="row" gap="medium" wrap>
                  <Text weight={500}>Description</Text>
                  <StyledTextArea rows={5} resize={false} {...field} />
                </Box>
              )}
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
        </form>
      </Box>
    </Box>
  );
};

export default RequestByEmployer;
