import QnA from "./qna.component";
import { questionSchema } from "../../../../api";

export default {
  title: "Quiz/Question and Answer",
  component: QnA,
};

const Template = (args) => <QnA {...args} />;
export const QuestionAndAnswerStory = Template.bind({});

QuestionAndAnswerStory.args = {
  question: questionSchema,
};
