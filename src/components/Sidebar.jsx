//STYLE
// import "./sidebar.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Sidebar() {
  const { user, setUser } = useContext(UserContext);
  return <></>;
}

export default Sidebar;
