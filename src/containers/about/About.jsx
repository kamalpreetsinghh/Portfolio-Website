import AboutInfo from "../../components/about/AboutInfo";
import Profiles from "../../components/about/Profiles";
import images from "../../constants/images";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Full Stack Developer",
      description: "I am a MERN Stack Developer",
      imageUrl: images.web_development,
    },
    {
      title: "iOS Developer",
      description: "I am an iOS developer",
      imageUrl: images.iOS_development,
    },
    {
      title: "Android Developer",
      description: "I am an android developer",
      imageUrl: images.android_development,
    },
  ];

  return (
    <section id="about" className="app__about app__section">
      <h2 className="app__heading">
        About <span>Me</span>
      </h2>
      <div className="app__about-div">
        <AboutInfo />
        <Profiles abouts={abouts} />
      </div>
    </section>
  );
};

export default About;
