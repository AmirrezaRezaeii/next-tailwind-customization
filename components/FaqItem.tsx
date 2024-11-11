import FaqAnswerItem from "./FaqAnswerItem";
import FaqQuestionItem from "./FaqQuestionItem";

export default function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <div key={index} className="">
      <FaqQuestionItem index={index} question={question} />
      <FaqAnswerItem index={index} answer={answer} />
    </div>
  );
}