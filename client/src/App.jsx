import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import { UserContextProvider } from "../context/UserContext";
import Dashboard from "./pages/Dashboard";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
        {/* <Navbar />
        <Sidebar /> */}
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
