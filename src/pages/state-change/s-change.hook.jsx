import { useContext } from "react";

const useStateChangeHook = (context) => {
  const { haribot, showHaribotStateChange } = useContext(context);
  return { haribot, showHaribotStateChange };
};

export default useStateChangeHook;
