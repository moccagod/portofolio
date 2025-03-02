const Button = ({ label }: { label: string }) => {
  return (
    <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition cursor-pointer">
      {label}
    </button>
  );
};

export default Button;