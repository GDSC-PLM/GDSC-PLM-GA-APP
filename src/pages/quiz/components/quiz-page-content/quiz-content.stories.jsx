import QuizContent from "./quiz-content.component";
import { questionSchema } from "../../../../api";

export default {
  title: "Quiz/Quiz Content View",
  component: QuizContent,
};

const Template = (args) => <QuizContent {...args} />;
export const HaribotStateZero = Template.bind({});
export const HaribotStateOne = Template.bind({});
export const HaribotStateTwo = Template.bind({});
export const HaribotStateThree = Template.bind({});

HaribotStateZero.args = {
  haribot: { type: "yellow", state: 0 },
  question: questionSchema,
};

HaribotStateOne.args = {
  haribot: { type: "yellow", state: 1 },
  question: questionSchema,
};

HaribotStateTwo.args = {
  haribot: { type: "yellow", state: 2 },
  question: questionSchema,
};

HaribotStateThree.args = {
  haribot: { type: "yellow", state: 3 },
  question: questionSchema,
};
