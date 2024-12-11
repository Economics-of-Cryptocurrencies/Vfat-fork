import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./feature/Home";
import Token from "./feature/Token";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokens" element={<Token />} />
      </Routes>
    </Router>
  );
}

export default App;
