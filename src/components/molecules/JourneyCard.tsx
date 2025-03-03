import { FaCalendarAlt } from "react-icons/fa";

interface JourneyCardProps {
  year: string;
  title: string;
  description: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  year,
  title,
  description,
}) => {
  return (
    <div className="relative border border-gray-700 rounded-lg p-5 bg-gray-800 shadow-lg max-w-lg transition-transform duration-300 hover:scale-105">
      <div className="absolute -left-6 top-5 w-4 h-4 bg-blue-500 rounded-full"></div>
      <p className="text-blue-400 flex items-center gap-2">
        <FaCalendarAlt />
        {year}
      </p>
      <h3 className="text-white font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default JourneyCard;
