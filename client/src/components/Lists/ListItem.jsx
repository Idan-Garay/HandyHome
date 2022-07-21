import React from "react";
import { Box, Text, Avatar, Heading } from "grommet";
import { User } from "grommet-icons";
import { Link } from "react-router-dom";

export default function ListItem({ profile }) {
  const { id, name, services, email, contactNo, description, picture } =
    profile;
  return (
    <Link
      to={`profiles/${id}`}
      state={profile}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box height="small" width="full" pad="0 2em">
        <Box
          direction="row-responsive"
          justify="evenly"
          fill="horizontal"
          border={{ side: "top", color: "#aeaeae", size: "1px" }}
          pad=".5em 1em"
          height="large"
        >
          <Box direction="row" gap="medium">
            <Box width="8em">
              <Avatar size="large" background="accent-3" className="b-1">
                {picture ? (
                  <img
                    src={"data:image/jpg;base64," + picture}
                    alt="profilePic"
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <User size="large" />
                )}
              </Avatar>
            </Box>
          </Box>

          <Box gap="medium" width="90%">
            <Box width="medium">
              <Heading level={3} textAlign="start">
                {name}
              </Heading>
              <Heading level={5} textAlign="start" color="gray">
                {services
                  .map((service) => {
                    return String(service[0]).toUpperCase() + service.slice(1);
                  })
                  .join(", ")}
              </Heading>
            </Box>
            <Text textAlign="start">" {description} "</Text>
            <Box direction="row-responsive" gap="xlarge">
              <Text>
                Email: <strong>{email}</strong>
              </Text>
              <Text>
                Contact: <strong>{contactNo}</strong>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
