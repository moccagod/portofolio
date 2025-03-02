import TechLogo from "../atoms/TechLogo";

interface TechItemProps {
  logo: string;
  name: string;
}

const TechItem: React.FC<TechItemProps> = ({ logo, name }) => (
  <div className="flex flex-col items-center">
    <TechLogo src={logo} alt={name} />
    <p className="mt-2 text-gray-700">{name}</p>
  </div>
);

export default TechItem;
