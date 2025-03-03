import TechItem from "../molecules/TechItem";

const TechSection = () => {
  const technologies = [
    { name: "React", logo: "/portofolio//images/react.png" },
    { name: "Javascript", logo: "/portofolio//images/js.png" },
    { name: "Python", logo: "/portofolio//images/py.png" },
    { name: "HTML5", logo: "/portofolio//images/html5.png" },
    { name: "CSS3", logo: "/portofolio//images/css3.png" },
    { name: "TailwindCSS", logo: "/portofolio//images/tailwind.png" },
  ];

  return (
    <section className="py-6 text-center bg-gray-800">
      <h2 className="text-3xl font-bold text-white">
        I have experience with these technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto px-4">
        {technologies.map((tech, index) => (
          <TechItem key={index} {...tech} />
        ))}
      </div>
    </section>
  );
};

export default TechSection;
