import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">SAMEH</a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="copyright">
        <small>&copy; SAMEH BENALI All rights reserved .</small>
      </div>
    </footer>
  )
}

export default Footer