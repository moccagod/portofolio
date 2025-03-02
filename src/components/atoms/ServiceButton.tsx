import { Link } from "react-router-dom";
const ServiceButton: React.FC<{ link: string; text: string }> = ({
  link,
  text,
}) => {
  return (
    <Link
      to={link}
      className="bg-gray-800 hover:bg-gray-700 duration-300 text-white px-6 py-2 mt-4 rounded-full font-semibold"
    >
      {text}
    </Link>
  );
};

export default ServiceButton;
