import React, { useState } from "react";
import { Box, Image } from "grommet";
import { useNavigate } from "react-router-dom";

// its funny how I need these imports line so the images will display
import carpenter from "/assets/tools.png";
import plumber from "/assets/tap.png";
import masonry from "/assets/brickwork.png";
import gardener from "/assets/gardening.png";
import housekeeper from "/assets/sweeping.png";
import babysitter from "/assets/baby-stroller.png";

const ListContainer = (props) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = props.path;
    navigate(path, { state: { jobType: props.jobType } });
  };

  return (
    <Box
      gridArea={props.jobName}
      className="jobGrid"
      fill="vertical"
      focusIndicator={false}
      justify="center"
      hoverIndicator="background"
      onClick={routeChange}
    >
      <Image alignSelf="center" className="jobLogo" src={props.img_src} />
      <strong>{props.jobName}</strong>
    </Box>
  );
};

export default ListContainer;
