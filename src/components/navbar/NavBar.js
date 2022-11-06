import React, {useState}from 'react'
import {Link} from "react-router-dom"
import '../navbar/NavBar.css'

const NavBar = ({ setCursorVariant}) => {

  const [toggleNav, setToggleNav] = useState(false)

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
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/about"> ABOUT </Link> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/contact"> CONTACT </Link> 
          <a href='https://matthewcollings.bandcamp.com/' target='_blank' rel="noreferrer" onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links"> STORE </a> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links" to="/releases"> RELEASES </Link> 

          {/* <Link className="work-links" to="/film"> Film </Link>             
          <Link className="work-links" to="/live"> Live  </Link> */}
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="work-links" to="/snowden"> Snowden  </Link>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="work-links" to="/thirdmind"> ThirdMind  </Link>
          
      



        </div>    

      </div>
    </nav>
  )
}

export default NavBar
