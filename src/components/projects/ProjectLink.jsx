import { motion } from "framer-motion";

const ProjectLink = (props) => {
  return (
    <a href={props.gitHubUrl} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileInView={{ scale: [0, 1] }}
        whileHover={{ scale: [1, 0.9] }}
        transition={{ duration: 0.25 }}
        className="app__flex"
      >
        {props.children}
      </motion.div>
    </a>
  );
};

export default ProjectLink;
