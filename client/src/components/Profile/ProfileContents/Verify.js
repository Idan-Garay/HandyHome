import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FileInput,
  Form,
  FormField,
  Heading,
  Layer,
} from "grommet";
import { Save, Clear } from "grommet-icons";

const Verify = ({ profileData }) => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file1", file1);
    data.append("file2", file2);
    data.append("ProfileId", profileData.id);

    const requestOptions = {
      method: "POST",
      credentials: "include",
      body: data,
    };
    const res = await fetch("http://localhost:3501/upload", requestOptions);
    setFile1("");
    setFile2("");
  };

  return (
    <Box align="center">
      <Box gap="small">
        <Heading level={4} textAlign="start">
          Verification
        </Heading>
        <Form onSubmit={handleSubmit}>
          <Card height="medium" width="large" background="light-1">
            <CardBody pad="medium">
              <FileFormField
                label="Government-issued Id"
                name="file1"
                setFile={setFile1}
              />
              <FileFormField label="Selfie" name="file2" setFile={setFile2} />
            </CardBody>
            <CardFooter
              pad="small"
              background="light-2"
              direction="row-reverse"
            >
              <Button type="submit" primary label="Confirm" />
            </CardFooter>
          </Card>
        </Form>
      </Box>
    </Box>
  );
};

const FileFormField = ({ label, name, setFile }) => {
  return (
    <FormField label={label} name={name} color="">
      <FileInput
        name={name}
        onChange={(e) => {
          let files = e.target.files;
          let file = "";
          if (files) file = files[0];
          setFile(file);
        }}
        title="Selfie"
        confirmRemove={({ onConfirm, onCancel }) => (
          <Layer onClickOutside={onCancel} onEsc={onCancel}>
            <Box pad="medium" gap="medium">
              Are you sure you want to delete this file?
              <Box direction="row" align="center" justify="end" gap="small">
                <Button label="Cancel" plain onClick={onCancel} />
                <Button label="Delete file" onClick={onConfirm} primary />
              </Box>
            </Box>
          </Layer>
        )}
      />
    </FormField>
  );
};

export default Verify;
