import ServiceCard from "../molecules/ServiceCard";

const services = [
  {
    image: "/portofolio//images/landing-page.png",
    title: "Landing Page",
    description:
      "Mesmerize your customer with an innovative and engaging landing page that boosts conversions.",
    link: "/contact",
    buttonText: "More",
  },
  {
    image: "/portofolio//images/company.png",
    title: "Company Profile",
    description:
      "Showcase your business identity with a professional company profile that builds trust and credibility.",
    link: "/contact",
    buttonText: "More",
  },
  {
    image: "/portofolio//images/coding.png",
    title: "Portofolio Website",
    description:
      "Showcase your work and personal brand with a sleek and modern portfolio website that leaves a lasting impression.",
    link: "/contact",
    buttonText: "More",
  },
  {
    image: "/portofolio//images/tutor.png",
    title: "Private Tutor",
    description:
      "Learn web development, data analysis, and algorithms to enhance your skills and career.",
    link: "/contact",
    buttonText: "More",
  },
  {
    image: "/portofolio//images/ui-design.png",
    title: "Design",
    description:
      "Create stunning and user-friendly designs for your brand that enhance user experience and brand identity.",
    link: "/contact",
    buttonText: "More",
  },
];

const ServiceList = () => {
  return (
    <section className="bg-white py-12 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
