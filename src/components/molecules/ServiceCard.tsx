import ServiceImage from "../atoms/ServiceImage";
import ServiceTitle from "../atoms/ServiceTitle";
import ServiceDescription from "../atoms/ServiceDescription";
import ServiceButton from "../atoms/ServiceButton";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string; // Added link prop
  buttonText: string; // Added buttonText prop
}


const ServiceCard = ({ image, title, description, link, buttonText }: ServiceCardProps) => {

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <ServiceImage src={image} alt={title} />
      <ServiceTitle title={title} />
      <ServiceDescription description={description} />
      <ServiceButton link={link} text={buttonText} />

    </div>
  );
};

export default ServiceCard;
