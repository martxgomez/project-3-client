//STYLE
// import "./App.css";
import menu from "./assets/menu.svg";
import closeIcon from "./assets/icon-close.svg";

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
import EditPlan from "./pages/EditPlan";

//HOOKS
import { useState, useContext } from "react";
import axios from "axios";

//COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import Footer from "./components/Footer";

function App() {
  const [sidebarOn, setSidebarOn] = useState(false);
  const [plans, setPlans] = useState([]);


  const toggleSidebar = () => {
    setSidebarOn(!sidebarOn);
  };

  const getPublicPlans = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plans/public`)
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => console.log(error));
  };

  const formatDate = (prevDate) => {
    const date = new Date(prevDate);
    return date.toLocaleDateString("es-ES");
  };

  return (
    <>
      <Navbar onClick={toggleSidebar} iconSource={!sidebarOn? menu : closeIcon} />
      <Sidebar
        isOn={sidebarOn}
        setSidebarOn={setSidebarOn}
        toggleSidebar={toggleSidebar}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              getPublicPlans={getPublicPlans}
              plans={plans}
              formatDate={formatDate}
            />
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/log-in"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/details/:planId"
          element={<Plandetails formatDate={formatDate} plans={plans} />}
        ></Route>
        <Route
          path="/edit-plan/:planId"
          element={
            <IsPrivate>
              <EditPlan />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/user-homepage/"
          element={
            <IsPrivate>
              <UserHomepage
                getPublicPlans={getPublicPlans}
                plans={plans}
                formatDate={formatDate}
              />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/user-details/"
          element={
            <IsPrivate>
              <Userpage />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/user-edit/"
          element={
            <IsPrivate>
              <EditProfile />
            </IsPrivate>
          }
        ></Route>
        <Route
          path="/new-plan/"
          element={
            <IsPrivate>
              <CreatePlan />
            </IsPrivate>
          }
        ></Route>
        <Route path="/*" element={<Errorpage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
