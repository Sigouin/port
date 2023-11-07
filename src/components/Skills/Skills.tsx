import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

interface IName {
  name?: string;
}

const Skills = ({ name }: IName) => (
  <article className="skills__details">
    <BsPatchCheckFill className="skills__details-icon" />
    <h4>{name}</h4>
  </article>
);

const SkillsList = () => {
  const tools = [
    "TypeScript",
    "React",
    "JavaScript",
    "Next.js",
    "Vercel Deployment",
    "HTML",
  ];

  return (
    <section id="skills">
      <h2>Developer Tools</h2>

      <div className="container skills__container">
        <div>
          {tools.map((tools, index) => (
            <Skills key={index} name={tools} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
