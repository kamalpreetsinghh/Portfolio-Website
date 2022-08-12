import images from "../../constants/images";
import {
  FaFacebookSquare,
  FaSnapchatSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <div className="app__footer">
      <img src={images.footer_image} alt="footer" />

      <div className="app__footer-div">
        <div className="app__footer-myinfo">
          <h3>Kamal</h3>
          <p>Web and Mobile Developer</p>
        </div>
        <div>
          <ul className="app__footer-links">
            {navLinks.map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
                <div />
              </li>
            ))}
          </ul>
        </div>
        <div className="app__footer-social-media">
          <a
            href="https://www.facebook.com/kamalpreetsingh007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/kamalpreetsinggh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSnapchatSquare />
          </a>
          <a
            href="https://www.instagram.com/kamalpreetsinggh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
