import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useWelcomeHook = (context) => {
  const { setShowInstructionsModal, generateHaribot } = useContext(context);
  const navigate = useNavigate();

  const navigateToInstructions = () => {
    setShowInstructionsModal(true);
  };

  const navigateToQuiz = async () => {
    await generateHaribot();

    navigate("/quiz");
    setShowInstructionsModal(false);
  };

  return { navigateToInstructions, navigateToQuiz };
};

export default useWelcomeHook;
