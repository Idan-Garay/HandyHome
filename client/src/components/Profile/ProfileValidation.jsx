import React, { useState } from "react";
import { Form, Box, Heading, FileInput, Button, Notification } from "grommet";
import axios from "axios";

const ProfileValidation = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();

  const handleSubmit = async (e) => {
    console.log(e.files);
    const data = new FormData();
    data.append("file1", file1);
    data.append("file2", file2);

    const requestOptions = {
      method: "POST",
      credentials: "include",
      body: data,
    };

    console.log(data);

    const res = await fetch("http://localhost:3501/upload", requestOptions);
    console.log("res", res);
  };

  return (
    <Box margin={"small"} pad={"small"}>
      <h1>Account Verification</h1>
      <Form onSubmit={handleSubmit}>
        <Box
          border={{ color: "brand", size: "large" }}
          margin={"large"}
          pad={"small"}
          direction={"column"}
        >
          <Box
            border={{ color: "brand", size: "large" }}
            margin={{ vertical: "small", horizontal: "xlarge" }}
            pad={"small"}
            direction={"row"}
          >
            <Box margin={{ vertical: "small" }}>
              <Heading size="small" textAlign="start">
                Government-Issued ID
              </Heading>
            </Box>

            <Box margin={{ left: "60%" }}>
              <FileInput
                name="file1"
                value={file1}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFile1(file);
                }}
              />
            </Box>
          </Box>

          <Box
            border={{ color: "brand", size: "large" }}
            margin={{ vertical: "small", horizontal: "xlarge" }}
            pad={"small"}
            direction={"row"}
          >
            <Box margin={{ vertical: "small" }}>
              <Heading size="small" textAlign="start">
                Selfie Verification
              </Heading>
            </Box>

            <Box margin={{ left: "65%" }}>
              <FileInput
                name="file2"
                value={file2}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFile2(file);
                }}
              />
            </Box>
          </Box>

          <Button
            type="submit"
            primary
            label="Confirm"
            margin={{ horizontal: "45%" }}
          />
        </Box>
      </Form>
    </Box>
  );
};

export default ProfileValidation;
