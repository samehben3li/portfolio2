import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook,BiMessageSquareDetail } from 'react-icons/bi'
import { VscFolderLibrary  } from "react-icons/vsc"
import { useState } from "react"

const Nav = () => {

  const [activeNav,setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" className={ activeNav==="#" ? "active" : "" } onClick={()=>setActiveNav("#")}><AiOutlineHome /></a>
      <a href="#about" className={ activeNav==="about" ? "active" : "" } onClick={()=>setActiveNav("about")}><AiOutlineUser /></a>
      <a href="#experience" className={ activeNav==="exp" ? "active" : "" } onClick={()=>setActiveNav("exp")}><BiBook /></a>
      <a href="#portfolio" className={ activeNav==="portfolio" ? "active" : "" } onClick={()=>setActiveNav("portfolio")}><VscFolderLibrary /></a>
      <a href="#contact" className={ activeNav==="contact" ? "active" : "" } onClick={()=>setActiveNav("contact")}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav