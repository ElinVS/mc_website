import React from 'react'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet'
import {motion} from 'framer-motion'




import matt_jag_spotlight from '../../assets/thirdmind/matt_jag_spotlight.jpg'
import wallshadows from '../../assets/images/wallshadows.jpeg'
import '../homepage/HomePage.css'



const HomePage = ({setCursorVariant}) => {

  const textEnter = () => {
    setCursorVariant('textNavBar');
} 

  const textLeave = () => {
    setCursorVariant('default')
}



 
  return (
    <>

    <Helmet>
      <title>Matthew Collings-Home</title>
    </Helmet>

    <section className='homepage-section-one'>
       <div className='letter-section-div-one'>
       

        <div className='letter-section-fullname'>
          <span >MATTHEW </span>
          <span id='collings-text'>COLLINGS</span>
        </div> 
        
        
      </div> 
    </section>

    <section className='homepage-section-two'>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     
      </section>

    <section className='homepage-section-three'>
      <div className='img-container-guitar'>
        <img src={matt_jag_spotlight} alt='artist-with-guitar' className='matt-jag-spotlight-img'/>
      </div>
    </section>

    <section className='homepage-section-four'> 
    </section>

    <section className='homepage-section-five'> 

    <audio controls></audio>
    </section>

    <section className='homepage-section-six'>
      {/* <img src={wallshadows} alt='wall-with-shadows' className='wall-shadows-img'/> */}

          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/bio"> BIO </Link> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/contact"> CONTACT </Link> 
          <a onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second"> STORE </a> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/releases"> RELEASES </Link> 
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/work"> WORK  </Link> 
    
    
    </section>

    



    </>

  )
}

export default HomePage




          {/* <section className='letter-section-firstname'>
            <div className='letter-m'>M</div>
            <div className='letter-a'>A</div>
            <div className='letter-t'>T</div>
            <div className='letter-tt'>T</div>
            <div className='letter-h'>H</div>
            <div className='letter-e'>E</div>
            <div className='letter-w'>W</div>
          </section>

          <section className='letter-section-lastname'>
            <div className='letter-c'>C</div>
            <div className='letter-o'>O</div>
            <div className='letter-l'>L</div>
            <div className='letter-ll'>L</div>
            <div className='letter-i'>I</div>
            <div className='letter-n'>N</div>
            <div className='letter-g'>G</div>
            <div className='letter-s'>S</div>
          </section> */}