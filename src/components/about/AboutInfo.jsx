import { IoMdDownload } from "react-icons/io";
import images from "../../constants/images";

const AboutInfo = () => {
  return (
    <div className="app__about-description">
      <p>
        I am Kamal, a <span>Full Stack Web and Mobile Developer,</span> who's
        passionate about learning new technologies and creating interesting
        projects. Apart from programming, I like Traveling, Hiking and
        Photography.
      </p>
      <a href={images.resume} download>
        <button type="button" className="app__button">
          Download Resume <IoMdDownload />
        </button>
      </a>
    </div>
  );
};

export default AboutInfo;
