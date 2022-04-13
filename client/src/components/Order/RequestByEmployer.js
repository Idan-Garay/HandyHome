import React from "react";
import { Box, Button, Heading, TextArea, TextInput, Text } from "grommet";
import { useForm, Controller } from "react-hook-form";
import { postRequestByEmployer } from "../../API/order";

const RequestByEmployer = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      formType: "request",
      contactNo: "",
      minRate: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    postRequestByEmployer(data);
    reset();
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
                  <Text>Contact Number</Text>
                  <TextInput name="" {...field} />
                </Box>
              )}
            />
            <Controller
              name="minRate"
              control={control}
              render={({ field }) => (
                <Box direction="row" gap="medium" wrap>
                  <Text>Minimum Daily Rate</Text>
                  <TextInput {...field} />
                </Box>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Box direction="row" gap="medium" wrap>
                  <Text>Description</Text>
                  <TextArea rows={5} resize={false} {...field} />
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
