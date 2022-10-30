import React from "react";

import useStateChangeHook from "./s-change.hook";
import StateChangeView from "./s-change.view";

import AppContext from "../../context/app.context";

const StateChange = () => {
  const { haribot } = useStateChangeHook(AppContext);
  return <StateChangeView haribot={haribot} />;
};

export default React.memo(StateChange);
