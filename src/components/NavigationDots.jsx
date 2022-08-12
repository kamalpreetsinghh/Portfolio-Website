import { Link } from "react-scroll";

const NavigationDots = () => {
  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="app__navigation">
      {navLinks.map((item) => (
        <Link
          className="app__navigation-dot"
          to={item}
          key={item}
          activeClass="active"
          spy={true}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
