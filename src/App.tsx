import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { DashBoard } from "./pages/dashboard/DashBoard";

function App() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
