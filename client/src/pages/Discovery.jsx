import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Discovery/ProfileCard";
import { Box, Button, Grid, Text, Avatar, Heading } from "grommet";
import { User } from "grommet-icons";

import { getProfiles } from "../API/profiles";
import ListContainer from "../components/JobCategory/ListContainer";
import Plumbing from "/assets/tap.png";
import Housekeeping from "/assets/sweeping.png";
import Carpentry from "/assets/tools.png";
import Gardening from "/assets/gardening.png";
import BabySitting from "/assets/baby-stroller.png";
import Masonry from "/assets/brickwork.png";
import { Link } from "react-router-dom";

let profilesCache = [];

const JobCategory = ({ text = "All", Figure, isSelected, handleClick }) => {
  const bgColor = isSelected ? "#a9a9a9" : "white";
  return (
    <Box
      direction="row-responsive"
      height="3em"
      align="center"
      gap="small"
      text={text.toLowerCase()}
      background={bgColor}
      cursor="pointer"
      onClick={() => {
        handleClick(text);
      }}
    >
      <Box width="xsmall" align="center">
        {Figure && <img src={Figure} alt="Plumber" height="30" width="30" />}
      </Box>
      <Box direction="row">
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

const FilterButton = ({ handleClick }) => {
  return <Button primary onClick={handleClick} label="Filter" />;
};

const Discovery = () => {
  const [profiles, setProfiles] = useState(profilesCache);
  let [jobCategories, setJobCategories] = useState([
    { text: "All", isSelected: true },
    { text: "Plumbing", Figure: Plumbing, isSelected: false },
    { text: "Housekeeping", Figure: Housekeeping, isSelected: false },
    { text: "Carpentry", Figure: Carpentry, isSelected: false },
    { text: "Gardening", Figure: Gardening, isSelected: false },
    { text: "BabySitting", Figure: BabySitting, isSelected: false },
    { text: "Masonry", Figure: Masonry, isSelected: false },
  ]);

  const handleClick = (text) => {
    const catIdx = jobCategories.findIndex(
      (cat) => cat.text.toLowerCase() === text.toLowerCase()
    );
    if (catIdx !== -1) {
      if (catIdx !== 0) jobCategories[0].isSelected = false;
      else if (catIdx === 0) {
        jobCategories = jobCategories.map((cat) => ({
          ...cat,
          isSelected: false,
        }));
      }
      jobCategories[catIdx].isSelected = !jobCategories[catIdx].isSelected;
      setJobCategories([...jobCategories]);
    }
  };
  const filterProfiles = () => {
    let filteredProfiles = [];
    if (jobCategories[0].isSelected) {
      filteredProfiles = profilesCache;
    } else {
      if (profilesCache.length > 0) {
        const categoryFilters = jobCategories
          .filter((cat) => cat.isSelected === true)
          .map((cat) => cat.text.toLowerCase());
        const result = profiles.filter((prof) => {
          return categoryFilters.some((category) =>
            prof.services.includes(category)
          );
        });
        filteredProfiles = result;
      }
    }
    setProfiles(filteredProfiles);
  };

  useEffect(() => {
    if (profilesCache.length !== 0 && profiles.length === 0) {
      setProfiles(profilesCache);
    } else if (profiles.length === 0) {
      getProfiles().then((json) => {
        profilesCache = json;
        setProfiles(profilesCache);
      });
    }
  }, [profiles.length]);

  return (
    <Box margin={{ top: "3em" }}>
      <Grid
        columns={["15em", "80%"]}
        rows={["auto"]}
        areas={[
          { name: "sidebar", start: [0, 0], end: [0, 0] },
          { name: "content", start: [1, 0], end: [1, 0] },
        ]}
      >
        <Box gridArea="sidebar">
          {jobCategories.map((category, idx) => (
            <JobCategory key={idx} {...category} handleClick={handleClick} />
          ))}
          <FilterButton handleClick={filterProfiles} />
        </Box>
        <Box gridArea="content">
          <DiscoveryList profiles={profiles} />
        </Box>
      </Grid>
    </Box>
  );
};

const ListItem = ({ profile }) => {
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
                    return service[0].toUpperCase() + service.slice(1);
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
};

const DiscoveryList = ({ profiles }) => {
  return (
    <>
      {profiles.length
        ? profiles.map((profile, idx) => (
            <ListItem profile={profile} key={"prof" + idx} />
          ))
        : " Empty List"}
    </>
  );
};

export default Discovery;
