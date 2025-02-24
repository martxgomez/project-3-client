//STYLE
//import "./Navbar.css";

//IMPORTS
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logo from "../assets/logo-prueba.jpg";

//COMPONENTS
import Menubutton from "./MenuButton";

function Navbar({ onClick }) {
  const { user, isLoggedIn } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <img src={Logo} alt="Logo prueba" />
        <NavLink to="/log-in">
          {" "}
          <button> Inicia sesión</button>
        </NavLink>
        <NavLink to="/sign-up">
          {" "}
          <button>Registrate</button>{" "}
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
