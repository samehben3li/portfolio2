import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sameh-benali-9381191a7/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/samehben3li" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/samehbenali415" target="_blank"><AiFillTwitterCircle /></a>
    </div>
  )
}

export default HeaderSocials