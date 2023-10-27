import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <p>
            Hello world! After spending the last 14 years going from a medical
            biller to an Executive manager I decided it was time to change
            course. I decided to pursue my passion for programming. I've spent
            the past year learning the ins and outs of JavaScript with the help
            of The Odin Project. I've also had the privilege to have a 1 on 1
            mentorship with a senior developer going over coding principles and
            best practices as well as Agile methodologies, issue tracking and
            sprint life cycle with Jira. I'm currently looking for a full time
            position as a software developer to grow and hone my skills.
            <br />
            <br />
            When I'm not coding, I enjoy spending time with the family, playing
            video games, or learning something new.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
