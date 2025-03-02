const ServiceImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-32 h-32 mx-auto" />;
};

export default ServiceImage;