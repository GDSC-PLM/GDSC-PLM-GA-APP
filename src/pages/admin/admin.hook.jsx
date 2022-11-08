import { useState, useRef, useContext, useEffect } from "react";

import { addDoc } from "firebase/firestore";

const useAdminHook = (context) => {
  const formRef = useRef();
  const authRef = useRef();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [apiKey, setApiKey] = useState("");

  const { getQuestionsRef, getApiKey } = useContext(context);

  const handleForm = async (e) => {
    e.preventDefault();
    document.activeElement.blur();

    const questionsRef = await getQuestionsRef();

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

  const authorize = async (e) => {
    e.preventDefault();
    document.activeElement.blur();

    const [authInput] = [...authRef.current.elements].filter(
      (element) => element.type === "text"
    );
    const invalidMsg = document.getElementById("invalid-msg");

    if (!authInput.value) {
      return;
    }

    if (authInput.value !== apiKey) {
      authInput.style.border = "2px solid var(--gdsc-core-red)";
      invalidMsg.style.display = "block";

      setTimeout(() => {
        authInput.style.border = "2px solid var(--gdsc-text-body)";
      }, 1000);

      return;
    }

    authInput.value = "";
    authInput.style.border = "2px solid var(--gdsc-text-body)";
    invalidMsg.style.display = "none";
    setIsAuthorized(true);
  };

  useEffect(() => {
    (async () => {
      if (!apiKey) {
        const _apiKey = await getApiKey();
        setApiKey(_apiKey);
      }
    })();
  });

  return { formRef, authRef, handleForm, authorize, isAuthorized };
};

export default useAdminHook;
