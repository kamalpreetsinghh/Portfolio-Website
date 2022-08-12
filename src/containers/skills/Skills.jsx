import "./Skills.scss";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaApple,
  FaGitAlt,
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress, SiFirebase } from "react-icons/si";
import Skill from "../../components/skills/Skill";
import Experience from "../../components/skills/Experience";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 style={{ color: "#ff4700" }} /> },
    { name: "CSS", icon: <FaCss3 style={{ color: "#146cad" }} /> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#f7e018" }} /> },
    { name: "React", icon: <FaReact style={{ color: "#61dbfb" }} /> },
    { name: "Node", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <DiMongodb style={{ color: "#4ea248" }} /> },
    { name: "Git", icon: <FaGitAlt style={{ color: "#e44c30" }} /> },
    { name: "Android", icon: <FaAndroid style={{ color: "#3ddc84" }} /> },
    { name: "iOS", icon: <FaApple /> },
    { name: "React Native", icon: <FaReact style={{ color: "#61dbfb" }} /> },
    { name: "Firbase", icon: <SiFirebase style={{ color: "#f2c129" }} /> },
  ];

  const experiences = [
    {
      year: "2022",
      title: "Mobile Application Development",
      place: "George Brown College",
    },
    {
      year: "2021",
      title: "Data Analytics",
      place: "Durham College",
    },
    {
      year: "2018",
      title: "Software Engineer",
      place: "Kellton Tech Solutions Limited",
    },
    {
      year: "2014",
      title: "Computer Science Engineering",
      place: "The NorthCap University",
    },
  ];

  return (
    <section id="skills" className="app__section">
      <h2 className="app__heading">
        My <span>Skills</span>
      </h2>
      <div className="app__skills">
        <div className="app__skills-div">
          {skills.map((skill) => (
            <Skill name={skill.name} key={skill.name}>
              {skill.icon}
            </Skill>
          ))}
        </div>
        <div className="app__roadmap-div">
          {experiences.map((experience) => (
            <Experience experience={experience} key={experience.year} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
