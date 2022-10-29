import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Quiz from "./pages/quiz";

function App() {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("pre-loader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 1500);
  }
  return (
    !loading && (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    )
  );
}

export default App;
