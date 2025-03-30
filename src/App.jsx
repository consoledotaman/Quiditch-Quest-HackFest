import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Quidditch from "./routes/Quidditch"; 
import TeamRoom from "./routes/TeamRoom"; 
import QuidditchArena from "./routes/QuidditchArena";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quidditch" element={<Quidditch />} /> 
        <Route path="/teamroom/:house" element={<TeamRoom />} />
        <Route path="/quidditcharena" element={<QuidditchArena />} />
      </Routes>
    </Router>
  );
}
