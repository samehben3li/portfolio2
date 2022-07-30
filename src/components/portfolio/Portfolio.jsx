import "./portfolio.css"

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
          <img src="/assets/cmrc.png" alt="" />
        </div>
        <h3>TheKower-CMRC</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/e-commerce-html-css-js" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://ecm-tn.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/booking.png"alt="" />
        </div>
        <h3>TheKnower Booking</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/booking" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://knowerbooking.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/clock-react.png"alt="" />
        </div>
        <h3>Digital Clock - React JS</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/digital-clock-with-react-js" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://knowerclock.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/tic-tac-toe.png"alt="" />
        </div>
        <h3>Tic-Tac-Toe - React JS</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/tac-tac-toe-react-js" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://theknower-toe.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/movie-web-html-css-js.png" alt="" />
        </div>
        <h3>TheKower-MV</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/MoviesWebSite-html-css-js" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://theknower-mv.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src="/assets/cmrc-mern.png" alt="" />
        </div>
        <h3>TheKower-Shop</h3>
        <div className="cta">
          <a href="https://github.com/samehben3li/e-commerce-mern-stack" rel="noreferrer" className="btn" target="_blank">Github</a>
          <a href="https://theknowershop.netlify.app/" rel="noreferrer" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
    </div>
  </section>
  )
}

export default Portfolio