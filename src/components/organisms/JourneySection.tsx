import JourneyCard from "../molecules/JourneyCard";

const educationData = [
  {
    year: "2019 - 2022",
    title: "IPS - SMAN 25 Jakarta",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    year: "2022 - Sekarang",
    title: "Teknik Informatika - Universitas Esa Unggul",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const experienceData = [
  {
    year: "2017 - 2018",
    title: "Web Developer - Company",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    year: "2018 - 2019",
    title: "Web Developer - Company",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    year: "2019 - 2020",
    title: "Web Developer - Company",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const JourneySection = () => {
  return (
    <section className="bg-white text-black py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-black mb-10">
        My Journey
      </h2>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl w-full">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Education
            </h3>
            <div className="relative border-l-4 border-black pl-6 space-y-6">
              {educationData.map((edu, index) => (
                <JourneyCard key={index} {...edu} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Experience
            </h3>
            <div className="relative border-l-4 border-black pl-6 space-y-6">
              {experienceData.map((exp, index) => (
                <JourneyCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
