import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useScoreHook = (context) => {
  const { haribot, score, setHaribot, setScore, setQuestions } =
    useContext(context);

  const navigate = useNavigate();

  const tryAgain = () => {
    setHaribot({});
    setScore(0);
    setQuestions([]);
    navigate("/");
  };

  return { haribot, score, tryAgain };
};

export default useScoreHook;
