import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet'

import matt_jag_spotlight from '../../assets/thirdmind/matt_jag_spotlight.jpg'
import wallshadows from '../../assets/images/wallshadows.jpeg'
import '../homepage/HomePage.css'
import Footer from '../../components/footer/Footer'



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

      <p className='short-intro-bio'>Lorem ipsum dolor sit amet. Est voluptatem reiciendis et iusto officiis ut rerum veniam. Ea labore sunt ex architecto fuga qui provident maiores a perferendis doloribus. </p>
      
      
     
      </section>

    <section className='homepage-section-three'>
      <div className='img-container-guitar'>
        <img src={matt_jag_spotlight} alt='artist-with-guitar' className='matt-jag-spotlight-img'/>
      </div>
    </section>

    <section className='homepage-section-four'> 
    </section>

    {/* <section className='homepage-section-five'> 
    </section> */}

    <section className='homepage-section-six'>
      {/* <img src={wallshadows} alt='wall-with-shadows' className='wall-shadows-img'/> */}

          <div className='bio-div'>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/bio"> BIO </Link> 
          </div>
          <div>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/contact"> CONTACT </Link> 
          </div>
          <div>
          <a onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second"> STORE </a> 
          </div>
          <div>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/releases"> RELEASES </Link> 
          </div>
          <div>
          <Link onMouseEnter={textEnter} onMouseLeave={textLeave} className="navbar-links-second" to="/work"> WORK  </Link> 
          </div>
    </section>
    <Footer/>
  

    </>

  )
}

export default HomePage




