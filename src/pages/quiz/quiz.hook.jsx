import { useContext } from "react";
import { questionSchema } from "../../api";

const haribot = { type: "yellow", state: 1 };
const question = questionSchema;

const useQuizHook = (context) => {
  const {} = useContext(context);

  return { haribot, question };
};

export default useQuizHook;
