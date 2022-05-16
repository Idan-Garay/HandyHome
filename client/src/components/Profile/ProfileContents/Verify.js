import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FileInput,
} from "grommet";
import { Save, Clear } from "grommet-icons";

const Verify = () => {
  return (
    <Box justify="center" align="center">
      <Card height="medium" width="large" background="light-1">
        <CardHeader pad="medium">Upload Files</CardHeader>
        <CardBody pad="medium">
          <FileInput />
          <FileInput />
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Button icon={<Clear color="red" />} hoverIndicator />
          <Button icon={<Save color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Verify;
