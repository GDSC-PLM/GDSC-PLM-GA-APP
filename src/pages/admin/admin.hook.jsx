import { useRef } from "react";

import { questionsRef } from "../../api/firebase-config";
import { doc, getDocs, updateDoc } from "firebase/firestore";

const useAdminHook = () => {
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    document.activeElement.blur();

    const fetchQuestions = await getDocs(questionsRef);
    const [_data] = fetchQuestions.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const questionsDoc = doc(questionsRef, _data.id);

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

    await updateDoc(questionsDoc, {
      questions: [..._data.questions, { ...qTemplate }],
    });
  };

  return { formRef, handleForm };
};

export default useAdminHook;
