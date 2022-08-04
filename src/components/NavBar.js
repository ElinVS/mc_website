import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>

                    <Link className="nav-links" to="/bio"> Bio </Link> 
                    <Link className="nav-links" to="/contact"> Contact </Link> 
                    <a className="nav-links"> Store </a> 
                    <Link className="nav-links" to="/releases"> Releases </Link> 
                    
                    <Link className="navbar-app-name" to="/work"> Work  </Link>
                    <Link className="navbar-app-name" to="/"> MC  </Link>
      
    </div>
  )
}

export default NavBar
