import React, { useState } from "react";
import { Box, Image } from "grommet";
import { useNavigate } from "react-router-dom";

// its funny how I need these imports line so the images will display
import carpenter from "../../../public/assets/tools.png";
import plumber from "../../../public/assets/tap.png";
import masonry from "../../../public/assets/brickwork.png";
import gardener from "../../../public/assets/gardening.png";
import housekeeper from "../../../public/assets/sweeping.png";
import babysitter from "../../../public/assets/baby-stroller.png";

const ListContainer = (props) => {
  let navigate = useNavigate();
  const [ image, setImage ] = useState("");

  // switch(props.img_src) {
  //   case carpenter:
  //     setImage(carpenter);
  //   case plumber:
  //     setImage(plumber);
  //   case masonry:
  //     setImage(masonry);
  //   case gardener:
  //     setImage(gardener);
  //   case housekeeper:
  //     setImage(housekeeper);
  //   case babysitter:
  //     setImage(babysitter);
  // }

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
