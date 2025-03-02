const TextArea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full p-3 border rounded-lg h-28 focus:ring focus:ring-indigo-200"
    />
  );
};

export default TextArea;
