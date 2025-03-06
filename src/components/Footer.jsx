//STYLE
import "./Footer.css";
import githubIcon from "../assets/github-icon.svg";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/logo_ok_w.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__logo">
            <img src={LogoWhite} alt="Logo" />
          </li>
          <li className="footer__members">
            <h3>Idea original de:</h3>
            <br/>

            <h4>José Inacio, Marta Gómez Roxana Ferramola, Tomás Martín</h4>
          </li>
          <div className="footer__repos">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/tmartin87/project-3-server"
            >
              <h5>Server Repository</h5><img src={githubIcon} alt="Server" />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/martxgomez/project-3-client"
            >
              <h5>Client Repository</h5> <img src={githubIcon} alt="Client" />
            </a>
            </li>
            </div>
            <li>
            <Link to="/about"><h4>Sobre nosotros</h4></Link>
            </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
