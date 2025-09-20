import "./about.css";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Skills</h5>
              <small>10+ Language skills</small>
            </article>
          </div>
        </div>
        <div className="about__content">
          <p>
            I'm Sameh Benali, a passionate Fullstack Developer who loves
            building interactive, scalable, and user-friendly web and mobile
            applications. With hands-on experience in the MERN stack (MongoDB,
            Express, React, Node.js), I focus on writing clean, maintainable
            code and delivering impactful solutions.
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
