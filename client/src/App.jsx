import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
