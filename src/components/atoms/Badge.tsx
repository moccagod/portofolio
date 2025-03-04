const Badge = ({ label }: { label: string }) => {
  return (
    <span className="bg-gray-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
      {label}
    </span>
  );
};

export default Badge;
