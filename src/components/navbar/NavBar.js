import React from 'react'
import {Link} from "react-router-dom"
import '../navbar/NavBar.css'

const NavBar = () => {
  return (

    <nav className='navbar'>

      <div className='navbar-container'>

                    <Link className="navbar-links" to="/bio"> Bio </Link> 
                    <Link className="navbar-links" to="/contact"> Contact </Link> 
                    <a className="navbar-links"> Store </a> 
                    <Link className="navbar-links" to="/releases"> Releases </Link> 
                    
                    <Link className="navbar-links" to="/work"> Work  </Link>

                    {/* this link to be styled seperatly to the rest of the navbar-links */}
                    <Link className="navbar-links" to="/"> MC  </Link>

      </div>

    </nav>
  )
}

export default NavBar
