interface TechLogoProps {
  src: string;
  alt: string;
}

const TechLogo: React.FC<TechLogoProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-20 h-20 mx-auto hover:drop-shadow-2xl hover:w-24 duration-300" />
);

export default TechLogo;
