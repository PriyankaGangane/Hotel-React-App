//import logo from "./logo.svg";
import "./App.css";
import RegisterPage from "./Components/Authentication/RegisterPage";
import LoginPage from "./Components/Authentication/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelHomePage from "./Components/Dashboard/HotelHomePage";
import { useState } from "react";
import CreateHotelPage from "./Components/Hotels/CreateHotelPage";
import EditHotelPage from "./Components/Hotels/EditHotelPage";

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/dashboard"
            element={<HotelHomePage user={user} setUser={setUser} />}
          />
          <Route path="/hotels" element={<CreateHotelPage />} />
          <Route path="/hotels/:id" element={<EditHotelPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
