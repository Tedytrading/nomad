import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { DashBoard } from "./pages/dashboard/DashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
