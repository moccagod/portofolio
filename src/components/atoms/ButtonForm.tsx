const ButtonForm = ({
  label,
  type = "button",
}: {
  label: string;
  type?: "button" | "submit";
}) => {
  return (
    <button
      type={type}
      className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer"
    >
      {label}
    </button>
  );
};

export default ButtonForm;
