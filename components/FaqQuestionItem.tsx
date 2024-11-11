
export default function FaqQuestionItem(props: any) {
  const { question, index } = props;

  return (
    <>
      <span>{question}</span>
      <div className="p-3 border rounded-full bg-primary">
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </div>
    </>
  );
}