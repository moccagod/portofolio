import { useState } from "react";
import ProjectRow from "../molecules/ProjectRow";

const initialProjects = [
  {
    year: "2025",
    project: "SDS Merpati",
    company: "SDS Merpati",
    tech: ["React", "Vite", "Javascript", "TailwindCSS", "Supabase"],
    link: "https://moccagod.github.io/sdsmerpati/",
  },
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
  const [projects, setProjects] = useState(initialProjects);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  // Fungsi untuk sorting
  const handleSort = (key: "year" | "project") => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedProjects = [...projects].sort((a, b) => {
      if (key === "year") {
        return direction === "asc"
          ? Number(a.year) - Number(b.year)
          : Number(b.year) - Number(a.year);
      } else {
        return direction === "asc"
          ? a.project.localeCompare(b.project)
          : b.project.localeCompare(a.project);
      }
    });

    setSortConfig({ key, direction });
    setProjects(sortedProjects);
  };

  return (
    <section className="text-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">All Projects</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-gray-800 text-left">
              <th
                className="py-4 px-6 cursor-pointer"
                onClick={() => handleSort("year")}
              >
                Year{" "}
                {sortConfig?.key === "year"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
              <th
                className="py-4 px-6 cursor-pointer"
                onClick={() => handleSort("project")}
              >
                Project{" "}
                {sortConfig?.key === "project"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
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
