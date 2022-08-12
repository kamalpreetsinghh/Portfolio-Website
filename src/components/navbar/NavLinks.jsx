import { Link } from "react-scroll";

const NavLinks = () => {
  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <ul className="app__navbar-links">
      {navLinks.map((item) => (
        <li className="app__flex" key={`link-${item}`}>
          <Link to={item} activeClass="active" spy={true}>
            {item}
          </Link>
          <div />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
