import StateChangeView from "./s-change.view";

export default {
  title: "Quiz/State Change page",
  component: StateChangeView,
};

const Template = (args) => <StateChangeView {...args} />;
export const StateChangeViewStory = Template.bind({});

StateChangeViewStory.args = {
  haribot: { type: "yellow", state: 0 },
};
