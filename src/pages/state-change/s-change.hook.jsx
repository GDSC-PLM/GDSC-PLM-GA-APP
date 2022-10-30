import { useContext } from "react";

const useStateChangeHook = (context) => {
  const { haribot } = useContext(context);
  return { haribot };
};

export default useStateChangeHook;
