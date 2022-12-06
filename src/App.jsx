import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Cards, Home, Landing, Login, ResultSearch } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cards/:category" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resultsearch" element={<ResultSearch />} />
      </Routes>
    </div>
  );
}

export default App;
