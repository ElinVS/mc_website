import React from 'react'
import { Helmet } from 'react-helmet'

import matt_jag_spotlight from '../../assets/homepage_images/matt_jag_spotlight.jpg'
import foley_scrape_bw_02 from '../../assets/homepage_images/foley_scrape_bw_02.jpg'
import matt_ja_closeup from '../../assets/homepage_images/matt_ja_closeup.jpg'
import '../homepage/HomePage.css'



const HomePage = () => {

 
  return (
    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>

    <section className='homepage-section-one'>

       <div className='letter-section-div-one'>
      
        <div className='letter-section-div-two'> 

          <section className='letter-section-firstname'>
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
          </section>
          
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

    </>
  )
}

export default HomePage




