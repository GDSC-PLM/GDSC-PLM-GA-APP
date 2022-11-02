import { createContext, useState } from "react";
import { data } from "../api";

import { generalAssemblyRef } from "../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
    // const _data = await fetchDocument(generalAssemblyRef);
    // const questionsRef = collection(generalAssemblyRef, _data.id, "questions");
    // const test = await fetchDocuments(questionsRef);
    // console.log(test);
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

export async function fetchDocument(ref) {
  const res = await getDocs(ref);
  const [data] = res.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .filter((obj) => obj.app === "gdsc-plm-save-haribot");

  return data;
}

async function fetchDocuments(ref) {
  const res = await getDocs(ref);
  const data = res.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export default AppContext;
