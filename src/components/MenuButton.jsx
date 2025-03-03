/* eslint-disable react/prop-types */


// import "./MenuButton.css";


function MenuButton({ onClick, iconSource }) {
  
  return <img src={iconSource} className="" onClick={onClick}/>
}

export default MenuButton;
