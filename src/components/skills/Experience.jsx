import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="app__experience">
      <div className="app__experience-year">{experience.year}</div>
      <div className="app__experience-div">
        <div className="app__experience-title">{experience.title}</div>
        <div className="app__experience-place">{experience.place}</div>
      </div>
    </div>
  );
};

export default Experience;
