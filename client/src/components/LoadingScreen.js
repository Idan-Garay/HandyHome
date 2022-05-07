import React from "react";
import { Spinner, Layer } from "grommet";

const LoadingScreen = () => {
  return (
    <Layer position="center" plain>
      <Spinner size="large" />
    </Layer>
  );
};

export default LoadingScreen;
