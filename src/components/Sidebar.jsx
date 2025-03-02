/* eslint-disable react/prop-types */
//STYLE
import "./sidebar.css";

//HOOKS
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function Sidebar({ isOn, setSidebarOn, toggleSidebar }) {
  const { logOutUser } = useContext(UserContext);
  
  

  return (
    <>
      <section id="sidebar" className={isOn ? "sidebar-on" : "sidebar-off"}>
        <section>
          <Link className="sidebar__hide" onClick={() => toggleSidebar(false)} to="/user-homepage">⬅️</Link>
          <ul className="sidebar-ul">
            <li>
              <NavLink onClick={() => toggleSidebar(false)} to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink onClick={() => toggleSidebar(false)} to="/user-details/">Mi perfil</NavLink>
            </li>
            <li>
              <NavLink onClick={() => toggleSidebar(false)}to="/new-plan">Crea un plan</NavLink>
            </li>
            <li>
              <NavLink  to="/" onClick={logOutUser}>
                Cerrar sesión
              </NavLink>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Sidebar;
