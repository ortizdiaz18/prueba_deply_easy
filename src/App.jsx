import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Cards, Home, Landing, Login, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
