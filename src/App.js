import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Switch has been replaced with Routes
  Route,
} from "react-router-dom"; // npm i react-router-dom
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;