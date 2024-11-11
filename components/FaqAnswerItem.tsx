export default function FaqAnswerItem(props: any) {
    const { answer, index } = props;
  
    return (
      <div
        id={`accordion-collapse-body-${index}`}
        className="hidden pb-4 -mt-4 "
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5 border border-gray-200 shadow !shadow-inner !shadow-stone-200 bg-white ">
          <p
            className="mb-2 text-gray-500"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    );
  }