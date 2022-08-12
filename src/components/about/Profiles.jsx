import React from "react";
import Profile from "./Profile";

const Profiles = ({ abouts }) => (
  <div className="app__profiles">
    {abouts.map((about) => (
      <Profile about={about} key={about.title} />
    ))}
  </div>
);

export default Profiles;
