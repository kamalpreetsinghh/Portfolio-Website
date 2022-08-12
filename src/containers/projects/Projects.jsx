import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectFilters from "../../components/projects/ProjectFilters";
import images from "../../constants/images";
import "./Projects.scss";

const Projects = () => {
  const filters = ["All", "Android", "iOS", "React", "React Native", "Node"];

  const projects = [
    {
      title: "Holiday Hype",
      description: `Travel app for booking hotels, flights and restaurants.`,
      gitHubUrl: "https://github.com/kamalpreetsinghh/HolidayHype",
      tag: "Android",
      imageURL: images.holiday_hype,
    },
    {
      title: "Foodilicious",
      description: `Food delivery app for ordering food from the local restaurants.`,
      gitHubUrl:
        "https://github.com/kamalpreetsinghh/ReactNative/tree/main/Foodilicious",
      tag: "React Native",
      imageURL: images.foodilicious,
    },
    {
      title: "PortFolio Website",
      description: `Back-end application for the Holiday Hype App.`,
      gitHubUrl: "https://github.com/kamalpreetsinghh/HolidayHypeAPI",
      tag: "Node",
      imageURL: images.holiday_hype_api,
    },
    {
      title: "Holiday Hype API",
      description: `Back-end application for the Holiday Hype App.`,
      gitHubUrl: "https://github.com/kamalpreetsinghh/HolidayHypeAPI",
      tag: "Node",
      imageURL: images.holiday_hype_api,
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleProjectFilter = (item) => {
    setActiveFilter(item);

    setAnimateCard([{ y: 0, opacity: 1 }]);

    if (item === "All") {
      setFilteredProjects(projects.slice(startIndex, startIndex + 3));
    } else {
      setFilteredProjects(projects.filter((project) => project.tag === item));
    }
  };

  return (
    <section id="projects" className="app__section">
      <h2 className="app__heading">
        My <span>Projects</span>
      </h2>
      <ProjectFilters
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleProjectFilter}
      />
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects"
      >
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
