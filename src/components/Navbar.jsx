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
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <img src={Logo} alt="Logo prueba" />
        <NavLink to="/log-in"> <button> Log in</button></NavLink>
        <NavLink to="/sign-up"> <button>Sign up</button> </NavLink>
      </div>
    );
  } else
    <>
      <Menubutton onClick={onClick} />
      <img src={Logo} alt="Logo prueba" />
    </>;
}

export default Navbar;
