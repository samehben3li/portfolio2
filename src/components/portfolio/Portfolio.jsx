import "./portfolio.css"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
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
          <img src={ IMG2 } alt="" />
        </div>
        <h3>This is a porfolio item title</h3>
        <div className="cta">
          <a href="https://github.com/" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://github.com/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={ IMG3 } alt="" />
        </div>
        <h3>This is a porfolio item title</h3>
        <div className="cta">
          <a href="https://github.com/" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://github.com/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={ IMG4 } alt="" />
        </div>
        <h3>This is a porfolio item title</h3>
        <div className="cta">
          <a href="https://github.com/" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://github.com/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
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