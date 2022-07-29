import "./portfolio.css"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/blog.png" alt="" />
        </div>
        <h3>TheKnower Blog .</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/Blog-App" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://theknowerblog.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/quizapp.png" alt="" />
        </div>
        <h3>The Knower Quiz App</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/quiz-app-react-js.git" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://quiz-knower.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/digital-clock.png" alt="" />
        </div>
        <h3>Digital Clock HTLM/CSS/JS</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/digitalclock" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://theknowerclock.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/social-media.png" alt="" />
        </div>
        <h3>The Knower Social</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/social-media-mern-stack" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://knowersocial.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={ IMG5 } alt="" />
        </div>
        <h3>This is a porfolio item title</h3>
        <div className="cta">
          <a href="https://github.com/" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://github.com/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={ IMG6 } alt="" />
        </div>
        <h3>This is a porfolio item title</h3>
        <div className="cta">
          <a href="https://github.com/" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://github.com/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
    </div>
  </section>
  )
}

export default Portfolio