import "./header.css"
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div id="header" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>SAMEH BENALI</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="/assets/me.jpg" alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header