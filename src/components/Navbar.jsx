//STYLE
//import "./Navbar.css";

//IMPORTS
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logo from "../assets/logo-prueba.jpg";
import "./Navbar.css"


//COMPONENTS
import Menubutton from "./MenuButton";

function Navbar({ onClick })  {
  const { user, isLoggedIn } = useContext(UserContext);
  if (!user) {
    return (
      <div className="nav-bar">
        <img className="nav-bar__logo" src={Logo} alt="Logo prueba" />
        <NavLink to="/log-in">
          {" "}
          <button className="nav-bar__iniciar-button"> Inicia sesión</button>
        </NavLink>
        <NavLink to="/sign-up">
          {" "}
          <button className="nav-bar__registrate-button">Registrate</button>{" "}
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <Menubutton onClick={onClick} />
        <img src={Logo} alt="Logo prueba" />
      </div>
    );
  }
}

export default Navbar;
