import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Discovery/ProfileCard";
import { Box } from "grommet";

import { getProfiles } from "../API/profiles";

let profilesCache = [];

const Discovery = () => {
  const [profiles, setProfiles] = useState(profilesCache);

  useEffect(() => {
    if (profilesCache.length !== 0) {
      setProfiles(profilesCache);
    }

    getProfiles().then((json) => {
      if (profilesCache != json) setProfiles(json);
    });
  }, [profiles.length]);

  return (
    <Box direction="row-responsive" wrap gap="small" margin="xlarge">
      {profiles.length
        ? profiles.map((profile, idx) => (
            <ProfileCard profileData={profile} key={idx} />
          ))
        : null}
    </Box>
  );
};

export default Discovery;
