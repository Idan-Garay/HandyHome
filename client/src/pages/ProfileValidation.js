import React, { useState, setState } from "react";
import { Form, Box, Heading, FileInput, Button, Notification } from "grommet";
import axios from "axios";
import './style.css';

const ProfileValidation = () => {
  const [file1, setFile1] = useState([]);
  const [file2, setFile2] = useState([]);

  const handleSubmit = (e) => {
    console.log("Submit being handled");
        let govId = file1.name;
        let selfie = file2.name;
        console.log(file1);console.log(file2);
        const requestOptions = {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ govId, selfie }),
        };
        
        try {
          fetch("http://localhost:4000/pValidation", requestOptions)
        } catch (err) {
          console.log(err);
        }

        alert("Thank you! Please wait for your account to be verified.");
  };

  return (
    <Box
      margin={"small"}
      pad={"small"}
    >
      <h1>Account Verification</h1>
      <Form >
        <Box
          border={{ color: 'brand', size: 'large' }}
          margin={"large"}
          pad={"small"}
          direction={"column"}
        >

          <Box
            border={{ color: 'brand', size: 'large' }}
            margin={{vertical:"small", horizontal:"xlarge"}}
            pad={"small"}
            direction={"row"}
          >

            <Box
              margin={{vertical:"small"}}
            >
              <Heading  size="small" textAlign="start">
                Government-Issued ID
              </Heading>
            </Box>

            <Box
              margin={{left:"60%"}}
            >
            <FileInput
              name="file1"
              onChange={e => {
                const fileList = e.target.files;
                for (let i = 0; i < fileList.length; i += 1) {
                  setFile1(fileList[i]);
                }
              }}
            />
            </Box>

          </Box>

          <Box
            border={{ color: 'brand', size: 'large' }}
            margin={{vertical:"small", horizontal:"xlarge"}}
            pad={"small"}
            direction={"row"}
          >

            <Box
              margin={{vertical:"small"}}
            >
              <Heading  size="small" textAlign="start">
                Selfie Verification
              </Heading>
            </Box>

            <Box
              margin={{left:"65%"}}
            >
            <FileInput
              name="file2"
              onChange={e => {
                const fileList = e.target.files;
                for (let i = 0; i < fileList.length; i += 1) {
                  setFile2(fileList[i]);
                }
              }}
            />
            </Box>

          </Box>

          <Button 
            primary label="Confirm" 
            margin={{horizontal:"45%"}} 
            onClick={() => {
              handleSubmit();
            }}>
          </Button>

        </Box>

        
      </Form>
    </Box>
  );
};

export default ProfileValidation;
