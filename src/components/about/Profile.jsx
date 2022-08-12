import { motion } from "framer-motion";

const Profile = ({ about }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: "tween" }}
    className="app__profile-item"
  >
    <img src={about.imageUrl} alt={about.title} />
    <h3>{about.title}</h3>
  </motion.div>
);

export default Profile;
