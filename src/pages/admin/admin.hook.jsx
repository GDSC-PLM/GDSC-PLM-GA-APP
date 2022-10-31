import { useRef } from "react";

const useAdminHook = () => {
  const formRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    document.activeElement.blur();

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
  };

  return { formRef, handleForm };
};

export default useAdminHook;
