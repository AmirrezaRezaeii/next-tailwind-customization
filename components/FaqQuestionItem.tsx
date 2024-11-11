export default function FaqQuestionItem(props: any) {
  const { question, index, dataCategories } = props;

  let categories: string = "";
  if (dataCategories !== undefined && dataCategories.length > 0) {
    categories = dataCategories[0].label
      .replaceAll("#", "")
      .replaceAll(" ", ", ");
  }

  return (
    <h2
      id={`accordion-collapse-heading-${index}`}
      className="pb-4"
      data-categories={categories}
    >
      <button
        type="button"
        className="bg-white flex items-center justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border border-gray-300  hover:bg-zinc-200  gap-3"
        data-accordion-target={`#accordion-collapse-body-${index}`}
        aria-controls={`accordion-collapse-body-${index}`}
      >
        <span>{question}</span>
        <div className="p-3 border rounded-full bg-[#ed7431] contrast-100">
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
      </button>
    </h2>
  );
}
