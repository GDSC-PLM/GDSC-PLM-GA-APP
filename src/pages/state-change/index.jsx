import React from "react";

import useStateChangeHook from "./s-change.hook";
import StateChangeView from "./s-change.view";

import AppContext from "../../context/app.context";

const StateChange = () => {
  const { haribot, showHaribotStateChange } = useStateChangeHook(AppContext);
  return (
    <StateChangeView haribot={haribot} stateChange={showHaribotStateChange} />
  );
};

export default React.memo(StateChange);
