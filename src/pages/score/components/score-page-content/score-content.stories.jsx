import ScoreContent from "./score-content.component";

export default {
  title: "Score/Score Page Content",
  component: ScoreContent,
};

const Template = (args) => <ScoreContent {...args} />;
export const ScorePageContentStory = Template.bind({});

ScorePageContentStory.args = {
  haribot: { type: "yellow", state: 2 },
  score: 3,
};
