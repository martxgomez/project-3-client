import githubIcon from "../assets/github-icon.svg";
import gmailIcon from "../assets/gmail-icon.svg";
import linkedinIcon from "../assets/linkedin-app-icon.svg";
import githubIconNegro from "../assets/github-icon_negro.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us__title">Acerca de nosotros</h1>
      <div className="about-us__description">
        <p>
          ¡Hola! Somos Roxana, Marta, Tomás y José, un equipo apasionado que dio
          sus primeros pasos en el mundo de la programación en septiembre. Lo
          que empezó como una aventura llena de líneas de código, desafíos y
          café infinito, hoy se ha convertido en un viaje colaborativo lleno de
          aprendizaje y crecimiento.
        </p>
        <br></br>

        <p>
          Aunque somos nuevos en este universo, cada día nos enfrentamos a retos
          con entusiasmo y trabajo en equipo. Creemos en la colaboración, la
          experimentación y en que cada error es una oportunidad para mejorar.
        </p>
        <br></br>

        <p>
          Nos apasiona explorar tecnologías emergentes, desde desarrollo web
          hasta aplicaciones móviles, y estamos comprometidos con aprender
          constantemente para aportar valor a proyectos reales.
        </p>
        <br></br>

        <p>
          Más que colegas, somos compañeros de viaje en esta travesía digital.
          Si quieres conocer más sobre nuestro trabajo, colaborar o simplemente
          charlar sobre código, ¡estamos aquí para conectar!
        </p>
        <br></br>
      </div>
      <article className="about-us__team-member">
        <h3>Tomás Martin</h3>
        <a
          className="about-us__contact-link"
          href="https://github.com/tmartin87"
        >
          <img src={githubIconNegro} alt="Github Tomás" /> <p>codeHaunter</p>
        </a>
        <a
          className="about-us__contact-link"
          href="https://www.linkedin.com/in/tomas-martin-46496282/"
        >
          <img src={linkedinIcon} alt="Linkedin Tomás" /> <p>Tomás Martin</p>
        </a>
        <a
          className="about-us__contact-link"
          href="mailto:tmartindsgn@gmail.com"
        >
          <img src={gmailIcon} alt="Gmail Tomás" /> <p>tmartindsgn@gmail.com</p>
        </a>
      </article>
      <article className="about-us__team-member">
        <h3>Marta Gomez</h3>
        <a
          className="about-us__contact-link"
          href="https://github.com/martxgomez"
        >
          <img src={githubIconNegro} alt="Github Marta" /> <p>martxgomez</p>
        </a>
        <a
          className="about-us__contact-link"
          href="https://www.linkedin.com/in/martagomezmartinez"
        >
          <img src={linkedinIcon} alt="Linkedin Marta" /> <p>Marta Gomez</p>
        </a>
        <a
          className="about-us__contact-link"
          href="mailto:martagomez.code@gmail.com"
        >
          <img src={gmailIcon} alt="Gmail Marta" />{" "}
          <p>martagomez.code@gmail.com</p>
        </a>
      </article>
      <article className="about-us__team-member">
        <h3>Roxana Ferramola</h3>
        <a
          className="about-us__contact-link"
          href="https://github.com/rferramola"
        >
          <img src={githubIconNegro} alt="Github Roxana" /> <p>rferramola</p>
        </a>
        <a
          className="about-us__contact-link"
          href="https://www.linkedin.com/in/rferramola/"
        >
          <img src={linkedinIcon} alt="Linkedin Roxana" />{" "}
          <p>Roxana Ferramola</p>
        </a>
        <a
          className="about-us__contact-link"
          href="mailto:ferramolafvm@gmail.com"
        >
          <img src={gmailIcon} alt="Gmail Roxana" />{" "}
          <p>ferramolafvm@gmail.com</p>
        </a>
      </article>
      <article className="about-us__team-member">
        <h3>José Inacio</h3>
        <a
          className="about-us__contact-link"
          href="https://github.com/Joseinacio25"
        >
          <img src={githubIcon} alt="Github José" /> <p>Joseinacio25</p>
        </a>
        <a
          className="about-us__contact-link"
          href="https://www.linkedin.com/in/jos%C3%A9-antonio-in%C3%A1cio-romero-5b04a0179/"
        >
          <img src={linkedinIcon} alt="Linkedin José" /> <p>José Inacio</p>
        </a>
        <a
          className="about-us__contact-link"
          href="mailto:inaciojosea13@gmail.com"
        >
          <img src={gmailIcon} alt="Gmail José" />{" "}
          <p>inaciojosea13@gmail.com</p>
        </a>
      </article>
    </div>
  );
}
export default AboutUs;
