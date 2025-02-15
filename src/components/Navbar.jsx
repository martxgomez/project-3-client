//STYLE
//import "./Navbar.css";

//IMPORTS
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logo from "../assets/logo-prueba.jpg";

//COMPONENTS
import MenuButton from "./MenuButton";

function Navbar({onClick}) {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div style={{ border: "red solid 1px" }}>
        <img src={Logo} alt="Logo prueba" />
        <NavLink to="/log-in">Log in</NavLink>
        <NavLink to="/sign-up">Sign up</NavLink>
      </div>
    );
  } else
    <>
      <Menubutton onClick={onClick} />
      <img src={Logo} alt="Logo prueba" />
    </>;
}

export default Navbar;
