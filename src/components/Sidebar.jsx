/* eslint-disable react/prop-types */
//STYLE
// import "./sidebar.css";

//HOOKS
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar({ isOn }) {
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
              <NavLink to="/user-details/:userId">Mi perfil</NavLink>
            </li>
            <li>
              <NavLink to="/new-plan">Crea un plan</NavLink>
            </li>
          </ul>
        </section>
        <section>
          <Link to="/">Cerrar sesión</Link>
        </section>
      </section>
    </>
  );
}

export default Sidebar;
