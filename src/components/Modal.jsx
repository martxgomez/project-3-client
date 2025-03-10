//STYLE
import "./Modal.css";

//COMPONENTS
import iconWhatsapp from "../assets/icon-whatsapp.svg";
import iconLink from "../assets/icon-link.svg";

//HOOKS
import { useNavigate } from "react-router-dom";

function Modal({ isOpen, onChangeModal, planId }) {
  const navigate = useNavigate();
  const url = `https://nexo-plans.netlify.app/#/details/${planId}`;
  const whatsappUrl = () => {
    return `https://wa.me/?text=${encodeURIComponent(url)}`;
  };

  const closeModal = () => {
    onChangeModal(!isOpen);
    navigate("/user-homepage");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className=" modal__container">
        <button className="modal__btn" onClick={closeModal}>
          x
        </button>
        <h1 className="modal__title">Plan creado satisfactoriamente</h1>
        <h2 className="modal__subtitle">
          Comparte con tus amigos y familiares
        </h2>
        <img className="modal__whatsapp-icon" src={iconWhatsapp} />
        <a href={whatsappUrl()} className="modal__whatsapp-btn">
          Whatsapp
        </a>
        <img className="modal__link-icon" src={iconLink} />
        <button
          className="modal__link-btn"
          onClick={() => {
            navigator.clipboard
              .writeText(url)
              .then(() => alert("Enlace copiado al portapapeles"))
              .catch((err) =>
                console.error("Error al copiar el enlace: ", err)
              );
          }}
        >
          Copiar enlace
        </button>
      </div>
    </div>
  );
}

export default Modal;
