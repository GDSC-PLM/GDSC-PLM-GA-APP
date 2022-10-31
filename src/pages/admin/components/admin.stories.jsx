import AddQuestionForm from "./admin.component";

export default {
  title: "Admin/Add Question",
  component: AddQuestionForm,
};

const Template = (args) => <AddQuestionForm {...args} />;
export const AddQuestionFormStory = Template.bind({});
