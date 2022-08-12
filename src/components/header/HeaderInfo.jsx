import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import EmailIcon from "@mui/icons-material/Email";

const HeaderInfo = () => (
  <div className="app__header-info">
    <h3 className="app__header-name">Hi, I'm Kamal</h3>
    <h4 className="app__header-profile">Web and Mobile Developer</h4>
    <div className="app__header-icons">
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <CodeIcon className="app__header-web-icon" sx={{ fontSize: 60 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <AppleIcon className="app__header-apple-icon" sx={{ fontSize: 60 }} />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <AndroidIcon
          className="app__header-android-icon"
          sx={{ fontSize: 60 }}
        />
      </motion.div>
    </div>
    <div className="app__header-contact-div">
      <a href="#contact">
        <button type="button" className="app__button app__header-button">
          Contact Me <EmailIcon />
        </button>
      </a>
    </div>
  </div>
);

export default HeaderInfo;
