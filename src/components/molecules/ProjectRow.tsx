import Badge from "../atoms/Badge";

type ProjectRowProps = {
  year: string;
  project: string;
  company: string;
  tech: string[];
  link: string;
};

const ProjectRow = ({
  year,
  project,
  company,
  tech,
  link,
}: ProjectRowProps) => {
  return (
    <tr className="border-b border-gray-700 text-gray-800 text-left">
      <td className="py-4 px-6">{year}</td>
      <td className="py-4 px-6 font-semibold">{project}</td>
      <td className="py-4 px-6">{company}</td>
      <td className="py-4 px-6 flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <Badge key={index} label={t} />
        ))}
      </td>
      <td className="py-4 px-6 text-blue-400">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link} ↗
        </a>
      </td>
    </tr>
  );
};

export default ProjectRow;
