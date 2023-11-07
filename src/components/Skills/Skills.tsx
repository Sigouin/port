import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Developer Tools?</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div>
        {/* === End of Front  */}
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4>Node JS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
