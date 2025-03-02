import { Link } from "react-router-dom";
const GetInTouchButton = () => {
  return (
    <Link
      to="/Contact"
      className="bg-gray-800 hover:bg-gray-700 duration-300 text-white px-6 py-2 mt-4 rounded-full font-semibold"
    >Contact Me!</Link>
  );
};

export default GetInTouchButton;
