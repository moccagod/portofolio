interface TechLogoProps {
  src: string;
  alt: string;
}

const TechLogo: React.FC<TechLogoProps> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-20 h-20 mx-auto hover:drop-shadow-2xl transition-transform duration-300 hover:scale-105"
  />
);

export default TechLogo;
