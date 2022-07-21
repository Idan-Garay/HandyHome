import React from "react";
import ListItem from "./ListItem";

export default function DiscoveryList({ profiles }) {
  return (
    <>
      {profiles.length
        ? profiles.map((profile, idx) => (
            <ListItem profile={profile} key={"prof" + idx} />
          ))
        : " Empty List"}
    </>
  );
}
