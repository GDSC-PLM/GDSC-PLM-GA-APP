import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import InstructionsModal from "./components/card/instructions-modal";

import Welcome from "./pages/welcome";
import Quiz from "./pages/quiz";
import Score from "./pages/score";

import Protected from "./components/protected/protected.component";
import Admin from "./pages/admin";

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
      <>
        <InstructionsModal />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz">
            <Route index element={<Quiz />} />
            <Route path="score" element={<Score />} />
          </Route>
          <Route
            path="/admin"
            element={
              <Protected apiKey={process.env.REACT_APP_API_KEY}>
                <Admin />
              </Protected>
            }
          />
        </Routes>
      </>
    )
  );
}

export default App;
