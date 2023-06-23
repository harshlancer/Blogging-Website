// App.js

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Articles from "./Components/Articles";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={`app ${isNightMode ? "night-mode" : ""}`}>
      <Navbar />
      <div className="night-mode-toggle">
        <label>
          <input
            type="checkbox"
            checked={isNightMode}
            onChange={toggleNightMode}
          />
          Night Mode
        </label>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Articles isNightMode={isNightMode} />}
        ></Route>
        <Route
          path="/news"
          element={<News isNightMode={isNightMode} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
