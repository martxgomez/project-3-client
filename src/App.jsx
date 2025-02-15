//STYLE
// import "./App.css";

//ROUTES
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Plandetails from "./pages/Plandetails";
import Userpage from "./pages/Userpage";
import UserHomepage from "./pages/UserHomepage";
import EditProfile from "./pages/EditProfile";
import CreatePlan from "./pages/CreatePlan";
import Errorpage from "./pages/Errorpage";
import AboutUs from "./pages/AboutUs";

//HOOKS
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

//COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOn, setSidebarOn] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setSidebarOn(!sidebarOn);
  };
  return (
    <>
      <Navbar onClick={toggleSidebar} />
      <Sidebar isOn={sidebarOn} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/log-in" element={<Login />}></Route>
        <Route path="/details/:planId" element={<Plandetails />}></Route>
        <Route path="/user-homepage/:userId" element={<UserHomepage />}></Route>
        <Route path="/user-details/:userId" element={<Userpage />}></Route>
        <Route path="/user-edit/:userId" element={<EditProfile />}></Route>
        <Route path="/new-plan" element={<CreatePlan />}></Route>
        <Route path="/*" element={<Errorpage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
