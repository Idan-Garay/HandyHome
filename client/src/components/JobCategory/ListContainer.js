import React from "react";
import { Box, Image } from "grommet";
import { useNavigate } from "react-router-dom";

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
