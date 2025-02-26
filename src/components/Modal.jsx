//STYLE
import "./Modal.css";

function Modal({ isOpen, onChangeModal }) {
  const closeModal = () => {
    onChangeModal(!isOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className=" modal__container">
        <button onClick={closeModal}>x</button>
        <h2>Quieres invitar a tus amigos?</h2>
        <p>Compartir enlace</p>
        <button>Copiar url</button>
        <p>Compartir por Whatsapp</p>
        <button>Compartir</button>
      </div>
    </div>
  );
}

export default Modal;
