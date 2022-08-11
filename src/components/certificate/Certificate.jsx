import "./certificate.css"

const Certificate = () => {
  return (
    <section id="certificate">
        <h5>What I Learn</h5>
        <h2>Certificates</h2>
        <div className="container certificate__container">
          <div className="certificate__upper"></div>
          <div className="certificates__wrapper">
            <article className="certificate">
              <img src="/assets/work.png" alt="certificate" className="certificate__img" />
            </article>
            <article className="certificate">
              <img src="/assets/work.png" alt="certificate" className="certificate__img" />
            </article>
            <article className="certificate">
              <img src="/assets/work.png" alt="certificate" className="certificate__img" />
            </article>
            <article className="certificate">
              <img src="/assets/work.png" alt="certificate" className="certificate__img" />
            </article>
            {/* <article className="certificate">
              <img src="/assets/work.png" alt="certificate" className="certificate__img" />
            </article> */}
          </div>
          <div className="certificate__icons"></div>
        </div>
    </section>
  )
}

export default Certificate