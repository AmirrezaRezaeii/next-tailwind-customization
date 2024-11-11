import FaqItem from "./FaqItem";

type faq = {
  question: string;
  answer: string;
};

export default function Faq({ faqs }: { faqs: Array<faq> }) {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {faqs.map((f, i) => (
        <FaqItem
          key={i + 1}
          question={f.question}
          answer={f.answer}
          index={i + 1}
        />
      ))}
    </div>
  );
}