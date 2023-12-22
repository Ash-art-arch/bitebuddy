import { useState } from "react";
import Navbar from "./components/Navnar";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route index  element={<Homepage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
