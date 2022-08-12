import React from "react";

const ProjectFilters = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="app__project-filter">
      {filters.map((item) => (
        <div
          key={item}
          onClick={() => onFilterChange(item)}
          className={`app__project-filter-item ${
            activeFilter === item ? "item-active" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectFilters;
