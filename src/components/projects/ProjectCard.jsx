import { motion } from "framer-motion";
import ProjectLink from "./ProjectLink";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  return (
    <div className="app__work-item app__flex" key={project.title}>
      <div className="app__work-img app__flex">
        <img src={project.imageURL} alt={project.title} />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <ProjectLink gitHubUrl={project.gitHubUrl}>
            <GitHubIcon sx={{ fontSize: 32 }} />
          </ProjectLink>
        </motion.div>
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text">{project.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
