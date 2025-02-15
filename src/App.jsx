//STYLE
// import "./App.css";

//ROUTES
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

//HOOKS
import { useState } from "react";

//COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  const [sidebarOn, setSidebarOn] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setSidebarOn(!sidebarOn);
  };
  return (
    <>
      <Navbar onClick={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
