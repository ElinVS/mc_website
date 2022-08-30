import React from 'react'
import {Link} from "react-router-dom"
import '../navbar/NavBar.css'

const NavBar = ({ setCursorVariant}) => {

  const textEnter = () => {
    setCursorVariant('textNavBar');
} 

  const textLeave = () => {
    setCursorVariant('default')
}



  return (

    <nav className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-left'>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} id="home-link" to="/"> MATTHEW COLLINGS  </Link>
        </div>

        <div className='navbar-right'>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/bio"> ABOUT </Link> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/contact"> CONTACT </Link> 
          <a onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links"> STORE </a> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/releases"> RELEASES </Link> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/work"> WORK  </Link>           
        </div>    

      </div>
    </nav>
  )
}

export default NavBar
