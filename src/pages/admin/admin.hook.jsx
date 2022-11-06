import { useRef } from "react";

import { addDoc } from "firebase/firestore";
import ctx from "../../context/utils";

const useAdminHook = () => {
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    document.activeElement.blur();

    const questionsRef = await ctx.getQuestionsRef();

    const qTemplate = { prompt: "", choices: [], answer: "" };

    const formInputs = [...formRef.current.elements].filter(
      (element) => element.type === "text"
    );

    formInputs.forEach((el) => {
      switch (el.id) {
        case "prompt":
          qTemplate["prompt"] = el.value;
          el.value = "";
          el.focus();
          break;
        case "choice":
          qTemplate["choices"].push({ key: el.name, choice: el.value });
          el.value = "";
          break;
        case "ans":
          qTemplate["answer"] = el.value;
          el.value = "";
          break;
        default:
          break;
      }
    });

    await addDoc(questionsRef, { ...qTemplate });
  };

  return { formRef, handleForm };
};

export default useAdminHook;
