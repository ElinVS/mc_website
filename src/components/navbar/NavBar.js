import React from 'react'
import {Link} from "react-router-dom"
import '../navbar/NavBar.css'

const NavBar = ({ setCursorVariant}) => {

  const textEnter = () => {
    setCursorVariant('text');
} 

const textLeave = () => {
    setCursorVariant('default')
}



  return (

    <nav className='navbar'>

      <div className='navbar-container'>

                    <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/bio"> Bio </Link> 
                    <Link className="navbar-links" to="/contact"> Contact </Link> 
                    <a className="navbar-links"> Store </a> 
                    <Link className="navbar-links" to="/releases"> Releases </Link> 
                    
                    <Link className="navbar-links" to="/work"> Work  </Link>

                    {/* this link to be styled seperatly to the rest of the navbar-links */}
                    <Link id="home-link" to="/"> MC  </Link>

      </div>

    </nav>
  )
}

export default NavBar
