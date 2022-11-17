import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";

import InstructionsModal from "./components/card/instructions-modal";

import Welcome from "./pages/welcome";
import Quiz from "./pages/quiz";
import Score from "./pages/score";
import Admin from "./pages/admin";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background: #fff;
`;

const PreLoaderGif = styled.img`
  height: 75px;
  transition: all 300ms ease-in-out;

  @media only screen and (min-width: 1024px) {
    height: 100px;
  }
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  });

  return (
    <>
      {!loading ? (
        <>
          <InstructionsModal />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz">
              <Route index element={<Quiz />} />
              <Route path="score" element={<Score />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </>
      ) : (
        <PreLoader />
      )}
    </>
  );
}

function PreLoader() {
  return (
    <Wrapper>
      <PreLoaderGif
        src={require("../src/assets/gifs/pre-loader-icon.gif")}
        alt="pl-gif"
      />
    </Wrapper>
  );
}

export default App;
