import githubIcon from "../assets/github-icon.svg";
import gmailIcon from "../assets/gmail-icon.svg";
import linkedinIcon from "../assets/linkedin-app-icon.svg";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <>
      <h1>About us</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <article>
        <h3>Tomás Martin</h3>
        <a href="https://github.com/tmartin87">
          <img src={githubIcon} alt="Github Tomás" /> <p>codeHaunter</p>
        </a>
        <a href="https://www.linkedin.com/in/tomas-martin-46496282/">
          <img src={linkedinIcon} alt="Linkedin Tomás" /> <p>Tomás Martin</p>
        </a>
        <a href="mailto:tmartindsgn@gmail.com">
          <img src={gmailIcon} alt="Gmail Tomás" /> <p>tmartindsgn@gmail.com</p>
        </a>
      </article>
      <article>
        <h3>Marta Gomez</h3>
        <a href="https://github.com/martxgomez">
          <img src={githubIcon} alt="Github Marta" /> <p>martxgomez</p>
        </a>
        <a href="https://www.linkedin.com/in/martagomezmartinez">
          <img src={linkedinIcon} alt="Linkedin Marta" /> <p>Marta Gomez</p>
        </a>
        <a href="mailto:martagomez.code@gmail.com">

          <img src={gmailIcon} alt="Gmail Marta" /> <p>martagomez.code@gmail.com</p>
        </a>
      </article>
      <article>
        <h3>Roxana Ferramola</h3>
        <a href="https://github.com/rferramola">
          <img src={githubIcon} alt="Github Roxana" /> <p>rferramola</p>
        </a>
        <a href="https://www.linkedin.com/in/rferramola/">
          <img src={linkedinIcon} alt="Linkedin Roxana" /> <p>Roxana Ferramola</p>
        </a>
        <a href="mailto:ferramolafvm@gmail.com">
          <img src={gmailIcon} alt="Gmail Roxana" /> <p>ferramolafvm@gmail.com</p>
        </a>
      </article>
      <article>
        <h3>José Inacio</h3>
        <a href="https://github.com/Joseinacio25">
          <img src={githubIcon} alt="Github José" /> <p>Joseinacio25</p>
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-in%C3%A1cio-romero-5b04a0179/">
          <img src={linkedinIcon} alt="Linkedin José" /> <p>José Inacio</p>
        </a>
        <a href="mailto:inaciojosea13@gmail.com">
          <img src={gmailIcon} alt="Gmail José" /> <p>inaciojosea13@gmail.com</p>
        </a>
      </article>
  <Footer/>
      
    </>
  );
}
export default AboutUs;
