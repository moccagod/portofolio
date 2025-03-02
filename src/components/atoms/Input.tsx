const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-200"
    />
  );
};

export default Input;
