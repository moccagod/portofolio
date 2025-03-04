import ProjectRow from "../molecules/ProjectRow";

const projects = [
  {
    year: "2025",
    project: "Portofolio Azmi Nailal Hadi",
    company: "-",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS"],
    link: "https://moccagod.github.io/portofolio/",
  },
  {
    year: "2023",
    project: "Bumi Kencana Flour Company Profile",
    company: "Bumi Kencana Flour",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    link: "https://sagutanibumikencana.com/",
  },
  {
    year: "2023",
    project: "ARTHUB",
    company: "-",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    link: "https://moccagod.github.io/arthub/",
  },
];

const ProjectTable = () => {
  return (
    <section className="text-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">All Projects</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-gray-800 text-left">
              <th className="py-4 px-6">Year</th>
              <th className="py-4 px-6">Project</th>
              <th className="py-4 px-6">Made at</th>
              <th className="py-4 px-6">Built with</th>
              <th className="py-4 px-6">Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <ProjectRow key={index} {...proj} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectTable;
