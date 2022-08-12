import { motion } from "framer-motion";

const Skill = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.5 }}>
      <div className="app__skill-div">
        <div className="app__skill-icon">{props.children}</div>
        <p className="app__skill-name">{props.name}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
