import { Routes, Route, useNavigate } from "react-router-dom";
import { DashBoard } from "./pages/dashboard/DashBoard";
import { Login } from "./pages/login/Login";
import { useGlobalProvider } from "./providers/globalProvider/GlobalProviderContext";
import { useEffect } from "react";

function App() {
  const { currentUser } = useGlobalProvider();
  const navigate = useNavigate();

  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      console.log("User is logged in");
      navigate("/dashBoard");
    } else {
      console.log("User is not logged in");
      navigate("/");
    }
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
