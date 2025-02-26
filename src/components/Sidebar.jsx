/* eslint-disable react/prop-types */
//STYLE
// import "./sidebar.css";

//HOOKS
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Sidebar({ isOn }) {
  const { logOutUser, user } = useContext(UserContext);
  if (user) {
    return (
      <>
        <section id="sidebar" className={isOn ? "sidebar-on" : "sidebar-off"}>
          <section>
            <Link to="/user-homepage">⬅️</Link>
            <ul className="sidebar-ul">
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to={`/user-details/${user?._id}`}>Mi perfil</NavLink>
              </li>
              <li>
                <NavLink to="/new-plan">Crea un plan</NavLink>
              </li>
            </ul>
          </section>
          <section>
            <Link to="/">
              <button onClick={logOutUser}>Cerrar sesión</button>
            </Link>
          </section>
        </section>
      </>
    );
  }
}

export default Sidebar;
