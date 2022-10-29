import QuestionDialogue from "./question-dialogue.component";

export default {
  title: "Dialogues/Question Dialogue Component",
  component: QuestionDialogue,
};

const Template = (args) => <QuestionDialogue {...args} />;
export const QuestionDialogueStory = Template.bind({});

QuestionDialogueStory.args = {
  question: "Who is the founder of Google Developer Student Clubs PLM?",
};
