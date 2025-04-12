import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Add other pages here

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
