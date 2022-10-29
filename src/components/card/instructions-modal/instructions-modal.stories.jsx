import InstructionsModalComponent from "./instructions-modal.component";

export default {
  title: "Modal/Instructions Modal",
  component: InstructionsModalComponent,
};

const Template = (args) => <InstructionsModalComponent {...args} />;
export const InstructionsModalStory = Template.bind({});
