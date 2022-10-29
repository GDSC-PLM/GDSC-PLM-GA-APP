import CallToAction from "./cta-button.component";

export default {
  title: "Components/cta button",
  component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;
export const startCTAStory = Template.bind({});

startCTAStory.args = {
  text: "Start",
};

export const tryCTAStory = Template.bind({});
tryCTAStory.args = {
  text: "Try again",
};
