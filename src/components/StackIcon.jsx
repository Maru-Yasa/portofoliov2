import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
export default function StackIcon() {
  const techs = [
    <SiHtml5 size={32} />,
    <SiCss3 size={32} />,
    <SiPhp size={32} />,
    <SiJavascript size={32} />,
    <SiTypescript size={32} />,
    <SiPython size={32} />,
    <SiGnubash size={32} />,
    <SiMysql size={32} />,
    <SiSqlite size={32} />,
    <SiPostgresql size={32} />,
    <SiMongodb size={32} />,
    <SiNodedotjs size={32} />,
    <SiExpress size={32} />,
    <SiNextdotjs size={32} />,
    <SiLaravel size={32} />,
    <SiBootstrap size={32} />,
    <SiTailwindcss size={32} />,
    <SiReact size={32} />,
    <SiVuedotjs size={32} />,
    <SiFigma size={32} />,
  ];

  return (
    <>
      <div className="flex flex-row gap-3">
        {techs.map((tech, index) => {
          return (
            <button key={index} className="bg-accent p-4 text-accent-content">
              {tech}
            </button>
          );
        })}
      </div>
    </>
  );
}
