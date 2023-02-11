import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import Admin from "./pages/Admin";
import Autorization from "./pages/Autorization";
import Client from "./pages/Client";
import HotelManager from "./pages/HotelManager";
import Registration from "./pages/Registration";
import TourManager from "./pages/TourManager";
import Index from "./pages/Index";

import "./styles/app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/tourop" element={<TourManager />}></Route>
        <Route path="/manager" element={<HotelManager />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/client" element={<Client />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/authorization" element={<Autorization />}></Route>
        <Route path="/addHotel" element={<AddHotel />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
