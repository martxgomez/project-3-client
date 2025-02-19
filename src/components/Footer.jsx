//STYLE
//import "./Footer.css";
import githubIcon from "../assets/github-icon.svg"
function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>logo</li>
          <li>By Tomás, Roxana, Marta y José</li>
          <li>
            <a href="https://github.com/tmartin87/project-3-server">
              Server Repository <img src={githubIcon} alt="Server" />
            </a>
          </li>
          <li>
            <a href="https://github.com/martxgomez/project-3-client">
              Client Repository <img src={githubIcon} alt="Client" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
