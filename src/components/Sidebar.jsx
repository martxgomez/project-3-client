/* eslint-disable react/prop-types */
//STYLE
import "./Sidebar.css";

//HOOKS
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Sidebar({ isOn, setSidebarOn, toggleSidebar }) {
  const { logOutUser } = useContext(UserContext);
  useEffect(() => {
    if (typeof window != "undefined" && window.document && isOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOn]);
  return (
    <section id="sidebar" className={isOn ? "sidebar-on" : "sidebar-off"}>
      <Link onClick={() => toggleSidebar(false)} to="/user-homepage"></Link>

      <ul className="sidebar__menu">
        <div>
          <li>
            <NavLink onClick={() => toggleSidebar(false)} to="/">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => toggleSidebar(false)} to="/user-details/">
              Mi perfil
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => toggleSidebar(false)} to="/new-plan">
              Crea un plan
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => toggleSidebar(false)} to="user-homepage">
              Mis planes
            </NavLink>
          </li>
        </div>

        <li className="sidebar__logout-btn">
          <NavLink
            to="/"
            onClick={() => {
              logOutUser();
              toggleSidebar(false);
            }}
          >
            Cerrar sesión
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
