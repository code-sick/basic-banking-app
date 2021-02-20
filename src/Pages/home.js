import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Home">
        <div className="welcomeText">
          Welcome to Basic Banking Sysytem by Vikram Kumar
        </div>
        <Link to="/costumers" className="statedButton">
          Get Started
        </Link>
      </div>
      <div className="homeFooter">
        <ul className="nav">
          <a
            className="button"
            target="_blank"
            href="https://www.linkedin.com/in/vikram-kumar-793148184/"
          >
            LinkedIn
          </a>
          <a
            className="button"
            target="_blank"
            href="https://github.com/code-sick"
          >
            GitHub
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
