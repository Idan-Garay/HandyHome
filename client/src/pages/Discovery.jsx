import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "grommet";
import { getProfiles } from "../API/profiles";
import {
  Plumbing,
  Housekeeping,
  Carpentry,
  Gardening,
  BabySitting,
  Masonry,
} from "../components/Discovery/PicturesIndex";
import JobCategory from "../components/JobCategory.jsx";
import DiscoveryList from "../components/Lists/DiscoveryList";

let profilesCache = [];

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

export default Discovery;
