//STYLE
// import "./App.css";

//ROUTES
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Plandetails from "./pages/PlanDetails";
import Userpage from "./pages/Userpage";
import UserHomepage from "./pages/UserHomepage";
import EditProfile from "./pages/EditProfile";
import CreatePlan from "./pages/CreatePlan";
import Errorpage from "./pages/Errorpage";
import AboutUs from "./pages/AboutUs";

//HOOKS
import { useState, useContext } from "react";
// import { UserContext } from "./context/UserContext";

//COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";

function App() {
  const [sidebarOn, setSidebarOn] = useState(false);

  const toggleSidebar = () => {
    setSidebarOn(!sidebarOn);
  };
  return (
    <>
      <Navbar onClick={toggleSidebar} />
      <Sidebar isOn={sidebarOn} />
      <Routes>
        <Route path="/" element={<IsAnon> <Homepage /></IsAnon>}></Route>
        <Route path="/sign-up" element={<IsAnon><Signup/></IsAnon>}></Route>
        <Route path="/log-in" element={<IsAnon><Login/></IsAnon>}></Route>
        <Route path="/details/:planId" element={<Plandetails/>}></Route>
        <Route path="/user-homepage/:userId" element={<IsPrivate><UserHomepage/></IsPrivate> } ></Route>
        <Route path="/user-details/:userId" element={<IsPrivate><Userpage/></IsPrivate>}></Route>
        <Route path="/user-edit/:userId" element={<IsPrivate><EditProfile/></IsPrivate>}></Route>
        <Route path="/new-plan" element={<IsPrivate><CreatePlan/></IsPrivate>}></Route>
        <Route path="/*" element={<Errorpage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
