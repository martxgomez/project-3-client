/* eslint-disable react/prop-types */

//STYLES
import "./MenuButton.css";

function MenuButton({ onClick, iconSource }) {
  return <img src={iconSource} className="icon-source" onClick={onClick} />;
}

export default MenuButton;
