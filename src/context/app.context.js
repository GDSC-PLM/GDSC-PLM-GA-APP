import { createContext, useState } from "react";
import { data } from "../api";

import { generalAssemblyRef } from "../api/firebase-config";
import { collection } from "firebase/firestore";

import ctx from "./utils";

const AppContext = createContext();

const haribotType = ["yellow"];

export const AppProvider = ({ children }) => {
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [haribot, setHaribot] = useState({});
  const [showHaribotStateChange, setShowHaribotStateChange] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const generateHaribot = async () => {
    setHaribot({
      type: haribotType[Math.floor(Math.random() * haribotType.length)],
      state: 0,
    });
    setQuestions(generateQuestions(data));

    // we now get questions from questions collection
    const test = await ctx.getRandomQuestions();
    console.log(test);
  };

  return (
    <AppContext.Provider
      value={{
        showInstructionsModal,
        setShowInstructionsModal,

        haribot,
        setHaribot,
        generateHaribot,

        questions,
        setQuestions,

        showHaribotStateChange,
        setShowHaribotStateChange,

        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function generateQuestions(q) {
  const indices = [];

  while (indices.length !== 5) {
    let i = Math.floor(Math.random() * q.length);
    if (indices.indexOf(i) === -1) indices.push(i);
  }

  return indices.map((val, i) => {
    return {
      ...q[val],
      number: i + 1,
    };
  });
}

export default AppContext;
