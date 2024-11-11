import { AccordionContent, AccordionTitle } from "flowbite-react";
import FaqAnswerItem from "./FaqAnswerItem";
import FaqQuestionItem from "./FaqQuestionItem";
import { customAccordionTheme } from "@/lib/custom-flowbite-theme";

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
    <>
      <AccordionTitle theme={customAccordionTheme?.title}>
        <FaqQuestionItem question={question} />
      </AccordionTitle>
      <AccordionContent theme={customAccordionTheme?.content}>
        <FaqAnswerItem answer={answer} />
      </AccordionContent>
    </>
  );
}
