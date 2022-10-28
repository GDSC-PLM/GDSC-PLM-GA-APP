import Test from "./test.component";

export default {
  title: "Test/Test Component",
  component: Test,
};

const Template = (args) => <Test {...args} />;
export const TestStory = Template.bind({});
