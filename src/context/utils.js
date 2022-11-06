import { generalAssemblyRef } from "../api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

class ContextUtils {
  async #fetchAppDocument() {
    const res = await getDocs(generalAssemblyRef);
    const [data] = res.docs
      .map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .filter((obj) => obj.app === "gdsc-plm-save-haribot");

    return data.id;
  }

  async #fetchAppQuestions(appDocId) {
    const questionsRef = collection(generalAssemblyRef, appDocId, "questions");

    const res = await getDocs(questionsRef);
    const data = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return data;
  }

  #generateRandomQuestions(q) {
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
  }

  async getQuestionsRef() {
    const appDocId = await this.#fetchAppDocument();

    return collection(generalAssemblyRef, appDocId, "questions");
  }

  async getRandomQuestions() {
    const appDocId = await this.#fetchAppDocument();
    const appQuestions = await this.#fetchAppQuestions(appDocId);
    const questions = this.#generateRandomQuestions(appQuestions);

    return questions;
  }
}

const ctx = new ContextUtils();

export default ctx;
