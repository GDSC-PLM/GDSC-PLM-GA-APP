import Choice from "./choice-button.component";

export default {
  title: "Components/choice button",
  component: Choice,
};

const Template = (args) => <Choice {...args} />;
export const MobileChoiceButtonStory = Template.bind({});

MobileChoiceButtonStory.args = {
  choice: "Neil Riego",
};
