import ServiceCard from "../molecules/ServiceCard";

const services = [
  {
    image: "/images/landing-page.png",
    title: "Landing Page",
    description:
      "Mesmerize your customer with an innovative and engaging landing page that boosts conversions.",
    link: "/landingpage",
    buttonText: "More",
  },
  {
    image: "/images/company.png",
    title: "Company Profile",
    description:
      "Showcase your business identity with a professional company profile that builds trust and credibility.",
    link: "/companyprofile",
    buttonText: "More",
  },
  {
    image: "/images/ui-design.png",
    title: "Design",
    description:
      "Create stunning and user-friendly designs for your brand that enhance user experience and brand identity.",
    link: "/design",
    buttonText: "More",
  },
];


const ServiceList = () => {
  return (
    <section className="bg-white py-12 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} link={service.link} buttonText={service.buttonText} />

          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
