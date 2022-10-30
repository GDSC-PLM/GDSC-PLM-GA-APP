import ScoreCTA from "./score-cta.component";

export default {
  title: "Score/Score with Call to action",
  component: ScoreCTA,
};

const Template = (args) => <ScoreCTA {...args} />;
export const ScoreCTAStory = Template.bind({});

ScoreCTAStory.args = {
  score: 5,
};
