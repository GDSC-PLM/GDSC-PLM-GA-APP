import { useRef } from "react";

import { generalAssemblyRef } from "../../api/firebase-config";
import { collection, addDoc } from "firebase/firestore";

import { fetchDocument } from "../../context/app.context";

const useAdminHook = () => {
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    document.activeElement.blur();

    const _data = await fetchDocument(generalAssemblyRef);

    const questionsRef = collection(generalAssemblyRef, _data.id, "questions");

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
