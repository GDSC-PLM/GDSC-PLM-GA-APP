import React from "react";
import WelcomeView from "./welcome.view";
import useWelcomeHook from "./welcome.hook";
import AppContext from "../../context/app.context";

const Welcome = () => {
  const { navigateToInstructions } = useWelcomeHook(AppContext);
  return <WelcomeView {...{ navigateToInstructions }} />;
};

export default React.memo(Welcome);
