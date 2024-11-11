export default function FaqAnswerItem(props: any) {
  const { answer, index } = props;

  return (
    <p
      className="mb-2 text-gray-500"
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
}