import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./feature/Home";
import Token from "./feature/Token";
import Swap from "./feature/Swap";
import Portfolio from "./feature/Portfolio";
import Yield from "./feature/Yield";
import Lending from "./feature/Lending";
import Stats from "./feature/Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/yield" element={<Yield />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/tokens" element={<Token />} />
        <Route path="/lending-markets" element={<Lending />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
