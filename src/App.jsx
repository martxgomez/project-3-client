//ROUTES
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Plandetails from "./pages/PlanDetails";
import UserPage from "./pages/UserPage";
import UserHomePage from "./pages/UserHomePage";
import EditProfile from "./pages/EditProfile";
import CreatePlan from "./pages/CreatePlan";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import EditPlan from "./pages/EditPlan";

//HOOKS
import { useState } from "react";
import axios from "axios";

//COMPONENTS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import Footer from "./components/Footer";
import menu from "./assets/menu.svg";
import closeIcon from "./assets/icon-close.svg";

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
      <Navbar
        onClick={toggleSidebar}
        iconSource={!sidebarOn ? menu : closeIcon}
      />
      <Sidebar
        isOn={sidebarOn}
        setSidebarOn={setSidebarOn}
        toggleSidebar={toggleSidebar}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
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
              <UserHomePage
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
              <UserPage />
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
        <Route path="/*" element={<ErrorPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
