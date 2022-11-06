import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useQuizHook = (context) => {
  const { haribot, questions, setScore, setHaribot } = useContext(context);
  const navigate = useNavigate();

  const [questionNumber, setQuestionNumber] = useState(1);

  const [question, setQuestion] = useState(
    questions.filter(({ number }) => number === questionNumber)[0]
  );

  const checkAnswer = (e) => {
    const choice = e.target.closest("button");
    const stateChange = document.getElementById("state-change-page");

    if (choice.textContent !== question.answer) {
      choice.style.background = "var(--gdsc-core-red)";
      stateChange.style.visibility = "visible";
      stateChange.style.transform = "translateX(0%)";

      setTimeout(() => {
        setQuestionNumber((prev) => prev + 1);
        setHaribot((prev) => {
          return {
            ...prev,
            state: prev["state"] + 1,
          };
        });
        choice.style.background = "var(--gdsc-core-blue1)";
        stateChange.style.transform = "translateX(100%)";
        stateChange.style.visibility = "hidden";
      }, [2000]);

      return;
    }

    choice.style.background = "var(--gdsc-core-green)";
    setScore((prev) => prev + 1);

    setTimeout(() => {
      setQuestionNumber((prev) => prev + 1);
      choice.style.background = "var(--gdsc-core-blue1)";
    }, [1000]);
  };

  useEffect(() => {
    if (haribot.state === 3 || questionNumber > 5) {
      navigate("/quiz/score");
      return;
    }

    setQuestion(questions.filter(({ number }) => number === questionNumber)[0]);
    navigate(`/quiz?question=${questionNumber}`, { replace: true });
  }, [questionNumber, haribot]);

  return { haribot, question, checkAnswer };
};

export default useQuizHook;
