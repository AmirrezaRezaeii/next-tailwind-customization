import { Accordion, AccordionPanel } from "flowbite-react";
import FaqItem from "./FaqItem";

import { customAccordionTheme } from "@/lib/custom-flowbite-theme";

type faq = {
  question: string;
  answer: string;
};

export default function Faq({ faqs }: { faqs: Array<faq> }) {
  return (
    <div className="p-4">
      <Accordion theme={customAccordionTheme} collapseAll>
        {faqs.map((f, i) => (
          <AccordionPanel
            role="button"
            theme={customAccordionTheme}
            key={i + 1}
          >
            <FaqItem question={f.question} answer={f.answer} index={i + 1} />
          </AccordionPanel>
        ))}
      </Accordion>
    </div>
  );
}
