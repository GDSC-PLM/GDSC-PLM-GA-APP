import React from "react";

import useScoreHook from "./score.hook";
import ScoreView from "./score.view";
import AppContext from "../../context/app.context";

const Score = () => {
  const { haribot, score, tryAgain } = useScoreHook(AppContext);

  return <ScoreView haribot={haribot} score={score} tryAgain={tryAgain} />;
};

export default React.memo(Score);
