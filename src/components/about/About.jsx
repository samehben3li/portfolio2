import "./about.css"
import me from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ me } alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon"/>
              <h5>Skills</h5>
              <small>10+ Language skills</small>
            </article>
          </div>
          <p>I am Sameh Benali a mern-stack developer and a computer science student with a great knowledge in web development, and database manipulation and creation. Although I am still a student thanks to my 6 years of experience in this field I have managed to develop several projects that I invite you to see below. In addition to the certificates that I have been awarded during my academic career which is included in my portfolio</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About