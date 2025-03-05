//STYLE
import "./Footer.css";
import githubIcon from "../assets/github-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__logo">logo</li>
          <li className="footer__members">Idea original de:</li>
          <br />
          <ul>
            <li>José Inacio</li>
            <li>Marta Gómez</li>
            <li>Roxana Ferramola</li>
            <li>Tomás Martín</li>
          </ul>
          <br />
          <Link to="/about">Sobre nosotros</Link>

          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/tmartin87/project-3-server"
            >
              Server Repository <img src={githubIcon} alt="Server" />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/martxgomez/project-3-client"
            >
              Client Repository <img src={githubIcon} alt="Client" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
