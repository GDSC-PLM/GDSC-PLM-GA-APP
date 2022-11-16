import { createContext, useState } from "react";
import useContextUtils from "../hooks/use-context-utils";

const AppContext = createContext();

const haribotType = ["blue", "green", "red", "white", "yellow"];

export const AppProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const [haribot, setHaribot] = useState({});
  const [questions, setQuestions] = useState([]);

  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [showHaribotStateChange, setShowHaribotStateChange] = useState(false);

  const { getQuestionsRef, getRandomQuestions, getApiKey } = useContextUtils();

  const generateHaribot = async () => {
    const _questions = await getRandomQuestions();
    console.log(_questions);

    setHaribot({
      type: haribotType[Math.floor(Math.random() * haribotType.length)],
      state: 0,
      transition: 1,
    });

    setQuestions(_questions);
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

        getQuestionsRef,
        getApiKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
