import NavBar from "./components/navbar/NavBar";
import Header from "./containers/header/Header";
import Skills from "./containers/skills/Skills";
import About from "./containers/about/About";
import NavigationDots from "./components/NavigationDots";
import SocialMedia from "./components/SocialMedia";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import Footer from "./components/footer/Footer";
import useLocalStorage from "use-local-storage";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <NavBar isDarkMode={theme === "dark"} onThemeChange={switchTheme} />
      <NavigationDots />
      <SocialMedia />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
