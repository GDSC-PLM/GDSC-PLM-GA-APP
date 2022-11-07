import { generalAssemblyRef } from "../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useContextUtils = () => {
  const fetchAppDocument = async () => {
    const res = await getDocs(generalAssemblyRef);
    const [data] = res.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .filter((obj) => obj.app === "gdsc-plm-save-haribot");

    return data.id;
  };

  const fetchAppQuestions = async (appDocId) => {
    const questionsRef = collection(generalAssemblyRef, appDocId, "questions");

    const res = await getDocs(questionsRef);
    const data = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return data;
  };

  const generateRandomQuestions = (q) => {
    if (q.length < 5) return q;

    const indices = [];

    while (indices.length !== 5) {
      let i = Math.floor(Math.random() * q.length);
      if (indices.indexOf(i) === -1) indices.push(i);
    }

    return indices.map((val, i) => {
      return {
        ...q[val],
        number: i + 1,
      };
    });
  };

  const getQuestionsRef = async () => {
    const appDocId = await fetchAppDocument();

    return collection(generalAssemblyRef, appDocId, "questions");
  };

  const getRandomQuestions = async () => {
    const appDocId = await fetchAppDocument();
    const appQuestions = await fetchAppQuestions(appDocId);
    const questions = generateRandomQuestions(appQuestions);

    return questions;
  };

  return {
    getQuestionsRef,
    getRandomQuestions,
  };
};

export default useContextUtils;
