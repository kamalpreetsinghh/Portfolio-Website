import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  return (
    <div className="app__social-media">
      <div>
        <a
          href="https://www.linkedin.com/in/kamalpreetsinghh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </a>
      </div>
      <div>
        <a
          href="https://www.github.com/kamalpreetsinghh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: 32 }} />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/iamkamalpreett"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon sx={{ fontSize: 32 }} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
